

$(document).ready(function() {
    //Only Numbers Code source:
    //http://stackoverflow.com/questions/16689588/jquery-cannot-retrieve-input-number-value
    function onlyNumbers(evt) {
        // SOME OPTIONS LIKE ENTER, BACKSPACE, HOME, END, ARROWS, ETC.
        var arrayExceptions = [8, 13, 16, 17, 18, 20, 27, 35, 36, 37,
            38, 39, 40, 45, 46, 144];
        if ((evt.keyCode < 48 || evt.keyCode > 57) &&
            (evt.keyCode < 96 || evt.keyCode > 106) && // NUMPAD
            $.inArray(evt.keyCode, arrayExceptions) === -1) {
            return false;
        }
    }

    $('#totalDist').on('keydown', onlyNumbers);


    //Do the magic
    //Original CodePen inspiration:  Beer Name Generater
    $(".button").click(function(getName) {
        var randomNumber = function (max, min) {
            return Math.floor(Math.random() * (max - min)) +
                min;
        };
        var //workoutType = ["Endurance", "Speed", "Form"],
            workoutType = ["Endurance"],

            pattern = [
                "Pyramid"
                //"Blocks", "Ladder", "Pyramid", "Rounds"
            ],

            /*
                endurancePatterns = [["Pyramid 3", 1, 2, 3],
             ["Pyramid 4", 1, 2, 3, 4],
                ["Pyramid 5", 1, 2, 3, 4, 5]],
*/
            //randomise = randomNumber(3, 0),

            randyType = randomNumber(workoutType.length, 0),

            randyPattern = randomNumber(pattern.length, 0),

            //randyEP = randomNumber(endurancePatterns.length, 0),

            randomWorkoutType = workoutType[randyType],

            randomPattern = pattern[randyPattern],

            //randomEndurancePattern = endurancePatterns[randyEP],

            fonts = ["'Nothing You Could Do'", "'Rock Salt'", "'Permanent Marker'",
                "'Kaushan Script'", "'Shadows Into Light Two'", "'Reenie Beanie'",
                "'Walter Turncoat'", "'Give You Glory'"
            ],
            name = document.getElementById('userName').value,
            totalDist = $("#totalDist"),
            repeatMin = 25,  //dynamically generated based on skill?
            repeatMax = 100, //dynamically generated based on skill?
            poolCourse = 25, //input or preference
            poolMeasure = ["Y", "M"],
            practiceSet="";


        if (name.length >= 1) {
            if (randomWorkoutType === "Endurance") {

                //  if repeat min=25, repeat max=100, distance = 500
                var baseDistance = 25, pyramidSteps = 0,
                    pyramidUp = false, repeatTop = false;
                //  expect pyramid 3 pattern
                //  6 x [25,50,75]
                //
                //  expect pyramid 4 pattern
                //  4 x [25,50,75,100]
                //
                //  expect pyramid 5 pattern
                //  2 x [25,50,75,100,125]
                //
                //  given repeat min & max, create min of X even steps bewteen them in increments * pool length


                if (randomPattern === "Pyramid") {
                    //  Pyramid Can be 3, 4 or 5 steps
                    pyramidSteps = Math.floor(Math.random()*3+3);

                    //  Pyramid can be up or down
                    //  (pyramidUp will be true (-1) or false (0)
                    pyramidUp = Math.floor(Math.random()*2-1);

                    //  Pyramid can repeat top or not
                    //  (pyramidUp will be true (-1) or false (0)
                    repeatTop = Math.floor(Math.random()*2-1);

                    //  Get total distnace based on pyramid type & base distance
                    if (repeatTop) {
                        var pyramidDistance = gaussSum(pyramidSteps) * baseDistance * 2;
                    }   else {
                        var pyramidDistance=  gaussSum(pyramidSteps) * baseDistance +
                            gaussSum(pyramidSteps-1)*baseDistance;
                    }

                    //How many rounds fit into requested set size?
                    var rounds = Math.floor(parseInt(totalDist.val()) / pyramidDistance);

                    //check to see if #rounds fit request
                    //alternatively check to see if setDistance <= requestDistance
                    if (rounds<1) {
                        //
                    }

                    // String output the actual set
                    practiceSet = pyramidSteps +" Step " + randomPattern  +
                                   "<br />" + outputPyramid(baseDistance, pyramidSteps, pyramidUp, repeatTop) +
                                    "<br /> Rounds: " + rounds +
                                    "<br /> Distance: " + pyramidDistance*rounds;

                    //  If Rounds > 6, request a 2nd pattern
                }  else {

                    //Logic for other patterns will go here
                    practiceSet = randomPattern;

                }

                function outputPyramid(base, steps, upDown, repeatTop){
                    var set = "", i=0, j=0;
                    for (i=1; i<=steps; i++) {
                         set += (i*base).toString() + "+";
                    }
                    if (repeatTop) {
                        set +=  (steps)*base.toString() + "+";
                    }
                    for (j=steps-1; j>=1; j--) {
                        set += (j*base).toString();
                        if (j!=1) {
                            set+= "+";
                        }
                    }

                    return set;

                }
                /*
                if (randomEndurancePattern[0] === "Pyramid 3") {
                    rounds = Math.floor(parseInt(totalDist.val()) / (6 * 25));
                    practiceSet = randomEndurancePattern[0] + "<br /> Rounds: " + rounds + "<br />";
                }  else if (randomEndurancePattern[0] === "Pyramid 4") {
                    rounds = Math.floor(parseInt(totalDist.val()) / (10 * 25));
                    practiceSet = randomEndurancePattern[0] + "<br /> Rounds: " + rounds + "<br />";
                }   else if (randomEndurancePattern[0] === "Pyramid 5") {
                    rounds = Math.floor(parseInt(totalDist.val()) / (15 * 25));
                    if (rounds<1) {
                        //
                    }
                    practiceSet = randomEndurancePattern[0] + "<br /> Rounds: " + rounds + "<br />";
                }
                */
                /*
                for (i = 1; i < randomEndurancePattern.length; i++) {
                    practiceSet = practiceSet + randomEndurancePattern[i].toString()
                    if (i < randomEndurancePattern.length - 1)
                        practiceSet = practiceSet + ",  ";
                }
                */

            } else if (randomWorkoutType === "Speed") {
                practiceSet = "Speed";

            } else {
                practiceSet = "Form"
            }



            document.getElementById("title").style.fontFamily =
                fonts[randomNumber(fonts.length, 0)];
            document.getElementById('title').innerHTML =
                practiceSet +  "</br>";  //randomEndurancePattern;
        } else {
            alert("Enter your name first!");
        }
        //  }
    });
});