$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      1000 + Math.random() * 3000
    );
    $('body').append(dancer.$node);
  });

  $('.addDancerTwoButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancerTwo = new dancerMakerFunction($("body").height() * Math.random(), $("body").width() * Math.random());
    $('body').append(dancerTwo.$node);
  }); 

  $('.addDancerThreeButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancerThree = new dancerMakerFunction($("body").height() * Math.random(), $("body").width() * Math.random(), 2000);
    $('body').append(dancerThree.$node);
  }); 
});

