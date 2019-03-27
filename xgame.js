class Xgame {
    constructor(config) {
        this.cols = config.cols;
        this.rows = config.rows;
    }
    run() {
        this.initCellList();
    }
    initCellList() {
        let cellList = make2DArray(this.cols, this.rows);
        this.cellList = cellList;
    }
}