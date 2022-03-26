
const minimum = (arr) => {

    let min = Number.MAX_VALUE;
    for (let x = 0; x < arr.length; x++) {
        min = Math.min(arr[x], min);
    }
    return min;
}

const maximum = (arr) => {
    let max = Number.MIN_VALUE;
    for (let x = 0; x < arr.length; x++) {
        max = Math.max(arr[x], max);
    }
    return max;
}


const arr = [2, 4, 76, 44, 23, 5, 4, 55, 86, 35, 3, 55];
console.log("maximum is : " + maximum(arr));
console.log("minimum is : " + minimum(arr));