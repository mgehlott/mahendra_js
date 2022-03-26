const reverseNum = (num) => {

    let ans = 0;
    while (num > 0) {
        let x = num % 10;
        num = parseInt(num / 10);
        // console.log("num " + num);
        ans = ans * 10 + x;

    }
    return ans;
}

console.log(reverseNum(2345));
console.log(reverseNum(6754));