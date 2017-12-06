var dancerTwo = function(top, left) {
  this.$node = $('<img src="bee.png" class="dancerTwo">');
  this.rotate();
  this.setPosition(top, left);
};

dancerTwo.prototype.rotate = function() {
  //this.$node.css('-webkit-transform', 'rotate(+now+deg)');
  // this.$node.css({'transform': 'rotate(-180deg)'});
  var $elem = this.$node;
  console.log('loop');
  var loop = function() {
    $elem = $elem.animate({deg: -1500}, {
      duration: 2000,
      step: function(now) {
        $elem.css({
          transform: 'rotate(' + now + 'deg)'
        });
        loop();
      }
    }); 
  };

  loop();
};

dancerTwo.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};