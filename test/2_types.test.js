describe('basemode theDoubler()', function() {
  it('logs the correct responses based on type', function() {

    var testArray = [4, 11, "Hey", "frog", true, {}, undefined, false];

    testArray.forEach(function(thing){
        theDoubler(thing);
    });

    var logArgs = logSpy.args; // grab alert args
    expect(logArgs[0][0]).to.equal(8);
    expect(logArgs[1][0]).to.equal(22);
    expect(logArgs[2][0]).to.equal('HeyHey');
    expect(logArgs[3][0]).to.equal('frogfrog');
    expect(logArgs[4][0].toLowerCase()).to.contain('super-duper true');
    expect(logArgs[5][0].toLowerCase()).to.contain('everything is an object');
    expect(logArgs[6][0].toLowerCase()).to.contain("i can't double this");
    expect(logArgs[7][0].toLowerCase()).to.contain("i won't double this");
  });
});
