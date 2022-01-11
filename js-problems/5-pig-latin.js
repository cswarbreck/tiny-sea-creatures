// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const pigLatin = (str) => {
    str = str.split(' ');
    let result = [];
    for(let word of str){
        
        if(word.match(/[A-z]/gi) && word.length === 1){
            word = word.concat('ay');
            result.push(word)
        }else if(word.length === 1){
            result.push(word)
        }
        else{
            word = word.split('');
            word.push(word.shift(), 'ay');
            result.push(word.join(''))
        }
    }
    return result;
}

console.log(pigLatin('O emporatay o oresmay !'))