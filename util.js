const log = console.log.bind(console);

function make2DArray(i, j) {
    return new Array(i).fill().map(() => { return new Array(j) });
}