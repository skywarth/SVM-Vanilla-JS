let trainingData=[];
let testData=[];
let beforeSplit=[];




//backup the dataset
beforeSplit=[].concat(initialDataset);


//randomize the array/dataset order
function func(a, b) {
    return 0.5 - Math.random();
}
beforeSplit= beforeSplit.sort(func);



//split by 80-20 ratio
trainingData=beforeSplit.splice(0,beforeSplit.length*.8);
testData=beforeSplit.splice(0 ,beforeSplit.length);
//splitting done

//preparing the dataset for the algorithm/function
//meaning class vals will be in distinct array

let trainingLabels=[];
for(i=0;i<trainingData.length;i++){
    trainingLabels[i]=trainingData[i].pop();
}

trainingLabels = trainingLabels.map(function(item) { return item == 0 ? -1 : item; });
//last element for each array (class value) has been divided into a distinct array
//training labels ready

let testLabels=[];

for(i=0;i<testData.length;i++){

    testLabels[i]=testData[i].pop();
}
testLabels = testLabels.map(function(item) { return item == 0 ? -1 : item; });
//test labels ready




