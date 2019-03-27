const log = console.log.bind(console);
log(123);

class Cell {
    constructor() {

    }
}

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

function make2DArray(i, j) {
    return new Array(i).fill().map(() => { return new Array(j) });
}

let config = {
    cols: 1000,
    rows: 2000
}
let g = new Xgame(config);
g.run();
log(g)
log(2)