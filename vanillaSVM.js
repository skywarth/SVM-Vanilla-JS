//Vanilla SVM using SMO

class SVM {
    constructor(data, labels, C, kernel, RBFSigma = 15) {

    }



    //prepare kernel
    //ps only for gaussian...
    kernel(Xi, Xj) {
        switch (this._kernel) {
            case 'RBF':
                return kernels.gaussianKernel(Xi, Xj, this._RBFSigma);
            default:
                return 'ILLEGAL KERNEL';
        }
    }

}