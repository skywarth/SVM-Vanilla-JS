const C = 5;
const kernel = 'RBF';
const RBFSigma = 15;

let kernels=new Kernels();
let random=new random2();

const MySVM = new SVM(trainingData,trainingLabels,C,kernel,RBFSigma);
/*let a=MySVM.predict([50,50 ]);
console.log(a);
a=MySVM.predict([6.6500878665167775,39.49294636329541]);
console.log(a);*/

let predictionLabels=[];

for(i=0;i<testData.length;i++){

    predictionLabels[i]=MySVM.predict(testData[i]);
}
console.log(testLabels);
console.log(predictionLabels);

console.log(compareAccuracy(predictionLabels,testLabels));
console.log("finish");
