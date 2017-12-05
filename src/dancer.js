var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img src="bee.png" class="dancerTwo">');
  this.step(timeBetweenSteps);
  this.setPosition(top, left);
};


makeDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step, timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};