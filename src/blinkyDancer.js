var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.step = function () {
    this.$node.toggle();
    setTimeout(this.step.bind(this), timeBetweenSteps);
  };
 
  this.step();
  this.setPosition(top, left);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
