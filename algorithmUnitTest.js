
//const newSVM=new SVM();

const data = [
    [63.94467417052296,81.0217272621887],
    [54.87300013454443,60.84061766333669],
    [45.52048694403639,81.12464276459878],
    [48.965524328511705,57.18776467921587],
    [74.52679297504449,83.83083375121797],
    [54.37811765569671,56.03892121990233],
    [44.26860038064747,19.667730330959163],
    [49.174828952241675,45.63294964476442],
    [68.38409733522553,71.71723595963316],
    [59.78161085912989,61.55507106057365],
    [6.6500878665167775,39.49294636329541],
    [44.48056808348252,48.662212578138195]
];

const labels = [0,1,0,1,0,1,0,1,0,1,0,1];
/*
const C = 5;
const kernel = 'RBF';
const RBFSigma = 15;

let kernels=new Kernels();
let random=new random2();

const MySVM = new SVM(data,labels,C,kernel,RBFSigma);

let a=MySVM.predict([50,30 ]);
console.log(a);
// expected output : 1*/