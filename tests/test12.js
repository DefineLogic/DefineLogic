function Counter() {

    var counter = 0;

    setTimeout(function() {
        var innerCounter = 0;
        counter += 1;
        console.log("counter = " + counter);

        setTimeout(function() {
            counter += 1;
            innerCounter += 1;
            console.log("counter = " + counter + ", innerCounter = " + innerCounter)
        }, 1000);

    }, 500);
};

Counter();