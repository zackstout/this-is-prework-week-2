function thePizzeria() {
    var theNumber = 1;

    var michelangelo = function (value) {
        value = (value * 2);
        return value;
    }

    var donatello = function (value, anotherValue) {
        value = anotherValue + value;
        anotherValue = value * anotherValue;
        return anotherValue;
    }

    var leonardo = function (value) {
        var anotherValue = value;
        value *= 4;
        theNumber = value / 2;
        return (value + anotherValue);
    }

    var raphael = function (value, anotherValue, yetAnotherValue) {
        value = value * anotherValue + yetAnotherValue;
        return yetAnotherValue;
    }

    michelangelo(theNumber) + leonardo(theNumber);
    // ^ What number would you expect the line above to evaluate to?
    console.log(/* Replace this comment with your answer */);


    theNumber = theNumber * 2;

    console.log((donatello(theNumber, 2)) - (raphael(3, 2, theNumber)));
    // ^ What number would you expect the line above to evaluate to?
    console.log(/* Replace this comment with your answer */);

}
