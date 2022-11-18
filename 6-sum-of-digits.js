export const digitalRoot = (n) => {
    if (n < 10) {
        return n;
    }
    else {
        let stringed = n.toString().split('');
        let resultArray = [];
        stringed.forEach((el) => { resultArray.push(parseInt(el)); });
        const result = resultArray.reduce((a, b) => { return a + b; });
        return digitalRoot(result);
    }
};
console.log(digitalRoot(147));
