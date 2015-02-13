

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

            pattern = [" Blocks", " Ladder Up", " Ladder Down",
                " Pyramid Up", " Pyramid Down", " Rounds"
            ],

            endurancePatterns = [["Pyramid 3", 1, 2, 3],
                ["Pyramid 4", 1, 2, 3, 4],
                ["Pyramid 5", 1, 2, 3, 4, 5]],

            randomise = randomNumber(3, 0),

            randyP = randomNumber(workoutType.length, 0),

            randyA = randomNumber(pattern.length, 0),

            randyEP = randomNumber(endurancePatterns.length, 0),

            randomWorkoutType = workoutType[randyP],

            randomPattern = pattern[randyA],

            randomEndurancePattern = endurancePatterns[randyEP],

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

                for (i = 1; i < randomEndurancePattern.length; i++) {
                    practiceSet = practiceSet + randomEndurancePattern[i].toString()
                    if (i < randomEndurancePattern.length - 1)
                        practiceSet = practiceSet + ",  ";
                }

            } else if (randomWorkoutType === "Speed") {
                practiceSet = "Speed";

            } else {
                practiceSet = "Form"
            }

            /*
             if (randomise === 0) {
             practiceSet = randomWorkoutType + name;
             } else if (randomise === 1) {
             practiceSet = name + randomPattern;
             } else {
             practiceSet = randomWorkoutType + name +
             randomPattern;
             }
             */



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