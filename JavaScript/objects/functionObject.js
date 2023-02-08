// You can put functions inside objects. 

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat : function () {
    console.log(retreatMessage);
  }, takeOff: function() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};

alienShip.retreat();
alienShip.takeOff();

// This outputs the retreat message and the takeoff message to the console
//
