var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.$mrmeeseeks = $('<img src="mrmeeseeks.png" class="dancer">');
  this.$node = this.$mrmeeseeks;

  this.$mrmeeseeks.click(function() {
    this.$mrmeeseeks.attr('src', 'Explode.png');
    setTimeout(function() {
      this.$mrmeeseeks.remove();
    }.bind(this), 500);
  }.bind(this));


  this.step = function () {
    this.$node = this.$mrmeeseeks;
    this.$node.toggle();
    setTimeout(this.step.bind(this), timeBetweenSteps);
  };
 
  this.step();
  this.setPosition(top, left);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
