var dancerThree = function(top, left, time) {
  // this.$node = $('<img src="volleyball.png" class="dancerThree" id="volleyball">');
  this.$node = $('<div id="toggle"></div>');
  this.bounce();
  this.setPosition(top, left);
};

dancerThree.prototype = Object.create(makeDancer.prototype);
dancerThree.prototype.constructor = dancerThree;
dancerThree.prototype.bounce = function() {
  var $elem = this.$node;
  console.log('bounce called');
  $(document).click(function() {
    
  });
};

