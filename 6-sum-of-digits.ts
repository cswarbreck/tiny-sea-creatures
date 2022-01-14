export const digitalRoot = (n:number):number => {
  if(n < 10){
    return n;
  }else {
    let stringed: string[] = n.toString().split('');
    let resultArray: number[] = [];
    stringed.forEach((el:any) => { resultArray.push(parseInt(el))})
    const result: number = resultArray.reduce((a:number, b:number) => {return a + b});
    return digitalRoot(result)
  }
};

console.log(digitalRoot(147));