// Zach Grafton
// Beesweeper coding challenge using p5 to expand my understanding of data structures - in this case, 2D arrays

function make2DArray(cols, rows) {
  var arr = newArray(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

var grid;
var cols;
var rows;
var w = 20;

function setup() {
  createCanvas(201, 201);
  cols = floor(width/w);
  rows = floor(height/w);
  grid = make2DArray(cols, rows);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i*w, j*w, w);
    }
  }

  function draw() {
    background(255);
    for (var i = 0; i < cols; i++) {
      for (var j = 0; j<rows; j++) {
        grid[i][j].show();
      }
    }
  }

}