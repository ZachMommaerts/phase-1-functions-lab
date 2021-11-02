function distanceFromHqInBlocks(number) {
    let numberOfBlocks;

    if (number >= 42) {
        numberOfBlocks = number - 42;
    } else if (number < 42) {
        numberOfBlocks = 42 - number;
    };

    return numberOfBlocks;
}

function distanceFromHqInFeet(number) {
    let numberOfFeet = number;

    if (number >= 42) {
        numberOfFeet = number - 42;
    } else if (number < 42) {
        numberOfFeet = 42 - number;
    };

    return numberOfFeet * 264;
}

function distanceTravelledInFeet(num1, num2) {
    let feetTravelled;
    { num1 >= num2 ? feetTravelled = (num1 - num2) * 264 : feetTravelled = (num2 - num1) * 264};
    return feetTravelled;
}

function calculatesFarePrice(num1, num2) {
    let fare;
    let feetTravelled = distanceTravelledInFeet(num1, num2);

    if(feetTravelled <= 400) {
        fare = 0;
    } else if (feetTravelled <= 2000) {
        fare = (feetTravelled - 400) * .02;
    } else if (feetTravelled <= 2500) {
        fare = 25;
    } else {
        fare = 'cannot travel that far';
    }

    return fare;
}

