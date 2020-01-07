/*let testArr1=[1,-1,-1,1,-1,1,-1,1,1,1];
let testArr2=[1,-1,-1,1,1,1,-1,1,1,1];
*/
function compareAccuracy(arr1,arr2){
    if(arr1.length!=arr2.length){
        return 0;
    }
    let matches=0;
    for(i=0;i<arr1.length;i++){
        if(arr1[i]===arr2[i]){
            matches++;
        }
    }
    return (matches/arr1.length*100).toFixed(2)+'%';
}

/*function matchPerc(wordList, text){
    var matches = text.filter((word)=>{return wordList.includes(word)}).length
    return (matches / text.length * 100).toFixed(2) + '%'
}*/

/*console.log(compareAccuracy(testArr1,testArr2));*/

