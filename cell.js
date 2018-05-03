function Cell(x, y, w) {

  this.x = x;
  this.y = y;
  this.w = w;

  if (random(1)< .5) {
    this.bee = true;
  } else {
    this.bee = false;
  }
  this.revealed = false;
}

Cell.prototype.show() = function() {
    stroke(0);
    fill(255);
    rect(this.x, this.y, this.w, this.w);
    if (this.revealed) {
        if (this.bee) {
            ellipse(this.x+this.w*0.5, this.y+this.w*0.5, this.w*0.5);
        }
    }
}