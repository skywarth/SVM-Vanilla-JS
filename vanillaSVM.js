//Vanilla SVM using SMO

class SVM {
    constructor(data, labels, C, kernel, RBFSigma = 15) {
        let sigma = Number(RBFSigma);
        isNaN(sigma) ? (this._RBFSigma = 15) : (this._RBFSigma = RBFSigma);

        this._data = data;
        this._labels = labels;
        this._kernel = kernel;
        this._C = C;
        this._N = this._data.length;
        this._alpha = [];
        this._b = 0;
        this._maxPasses = 20;
        this._tol = 0.0001;

        for (let i = 0; i < this._N; i++) {
            this._alpha.push(0);
        }


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


    get data() {
        return this._data;
    }

    get labels() {
        return this._labels;
    }

}