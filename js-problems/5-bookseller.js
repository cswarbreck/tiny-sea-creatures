function stockList(listOfArt, listOfCat){
  
    let categories = [];
    let number = [];
    listOfArt.forEach(el => {
      el = el.split(' ');
      categories.push(el[0].split('')[0]);
      number.push(el[1]);
    })
    
    
    let myObj = {};
    
      for(let i = 0; i < listOfCat.length; i ++){
      if(categories.indexOf(listOfCat[i]) == -1){
        categories.push(listOfCat[i])
        number.push(0)
      }
    }
    
    for(let i = 0; i < categories.length; i++){
      if(myObj[categories[i]]){
        myObj[categories[i]] += parseInt(number[i])
      }else{
        myObj[categories[i]] = parseInt(number[i])
      }
    }
    
    const ordered = Object.keys(myObj).sort().reduce(
    (obj, key) => { 
      obj[key] = myObj[key]; 
      return obj;
    }, 
    {}
  );
  let result = [];
  
  console.log(ordered)
  
  for(let [key, value] of Object.entries(ordered)){
//     if(categories.indexOf(key) !== 0 && categories.indexOf(key) - 1 === categories.length){
//       result.push(`(${key} : ${value})`)
//     } else
      
      if(listOfCat.indexOf(key) !== 0){
      result.push(`(${key} : ${value}) - `)
    } else if( value == 0){
      result.push(`(${key} : '0')`)
    }
  }
  
  console.log(result);
//   console.log(myObj);
  
//   console.log(categories, number);
  
//   console.log(listOfArt, listOfCat)
}  

// ART = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
// CAT = ["A", "B", "C", "D"]
// res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"