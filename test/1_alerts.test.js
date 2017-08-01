describe('basemode animalGuess()', function() {
  it('triggers alert of "Try Again" when called with an argument of "panda" or "elephant"', function() {
    //Attempt incorrect guess
    animalGuess('panda');
    
    expect(alertSpy.calledOnce).to.be.true;

    var alertArgs = alertSpy.args[0][0]; // grab alert args
    expect(alertArgs.toLowerCase()).to.contain('try again');
    expect(alertArgs.toLowerCase()).to.not.contain('How did you know');

    //Another incorrect guess
    animalGuess('elephant');
    
    expect(alertSpy.calledTwice).to.be.true;

    var alertArgs2 = alertSpy.args[1][0]; // grab alert args    
    expect(alertArgs2.toLowerCase()).to.contain('try again');
    expect(alertArgs2.toLowerCase()).to.not.contain('How did you know');
  });

  it('triggers alert of "How did you know?!" when called with the argument turtle', function() {
    animalGuess('turtle');
    expect(alertSpy.calledOnce).to.be.true;

    var alertArgs = alertSpy.args[0][0]; // grab alert args
    expect(alertArgs.toLowerCase()).to.contain('how did you know');
    expect(alertArgs.toLowerCase()).to.not.contain('try again');
  });
});
