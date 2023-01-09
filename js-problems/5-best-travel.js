function chooseBestSum(t, k, ls) {
    let sums = [];
    rec = (sum, arr, n) => {
      if(n == 0){
        sums.push(sum)
      } else {
        for(let i = 0; i < arr.length; i++){
          rec(sum+arr[i], arr.slice(i+1), n-1)
        }
      }
    }
    rec(0, ls, k)
    var result = sums.sort((a, b) => b - a).find(a => a <=t)
    return typeof result === 'undefined' ? null : result
  }