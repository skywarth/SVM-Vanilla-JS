let trainingData=[];
let testData=[];
let beforeSplit=[];
beforeSplit=[].concat(initialDataset);
/*for(i=0;i<initialDataset.length*.8;i++){
    trainingData.push(initialDataset[i]);
}*/
let testMe=[
  1,2,3,4,5,6,7,8,9,10,
    1,2,3,4,5,6,7,8,9,10,
    1,2,3,4,5,6,7,8,9,10,
    1,2,3,4,5,6,7,8,9,10,
    1,2,3,4,5,6,7,8,9,10,
    1,2,3,4,5,6,7,8,9,10,
    1,2,3,4,5,6,7,8,9,10,
    1,2,3,4,5,6,7,8,9,10,
    1,2,3,4,5,6,7,8,9,10,
    1,2,3,4,5,6,7,8,9,10,
];


trainingData=testMe.splice(0,testMe.length*.8);
testData=testMe.splice(0 ,testMe.length);


console.log(trainingData);
console.log(testData);
console.log(testMe);
console.log('xx');
console.log(beforeSplit);
console.log(initialDataset);