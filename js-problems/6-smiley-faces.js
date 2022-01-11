// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

countSmileys = (arr) => {
    let count = 0;
    let validFaces = [":)",";)",":D",";D",":-D",":~D",":-)",":~)",";~D",";~)",";-D",";-)"]

    for(let face of arr){
        if(validFaces.indexOf(face) != -1){
            count++
        }
    }
    return count;
}


console.log(countSmileys([';D', 'e-(', ':-)', ';~)'])) 

// function countSmileys(arr) {
//     let eyes = ':' || ';';
//     let nose = '-' || '~';
//     let mouth = ')' || 'D';
//     let count = 0;
//     let noNoses = [];
//     let noses = [];
//     arr.forEach(el => {
//       if(el.length === 2){noNoses.push(el)}
//       if(el.length === 3){noses.push(el)}
//     })
//     for(let i = 0; i < noNoses.length; i++){
//       if(noNoses[i].indexOf(':') || noNoses[i].indexOf(';')&& noNoses[i].indexOf(')') || noNoses[i].indexOf('D')){count++}
//     }
//     return count
//   }// should return 3;