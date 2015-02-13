/**
 * Created by suzanne on 2/10/15.
 */

/** by crisberrios @ FCC */

function fill (minSteps, maxSteps, stepSize, steps)
{
    var arr = [];
    var factor = (maxSteps - minSteps) / (steps - 1) ;
    arr[0] = stepSize * minSteps;
    arr[steps-1] = stepSize * maxSteps;
    for (var i = 1 ; i < steps -1 ; i++ ) {
        arr[i] = stepSize * Math.round(minSteps + i*factor);
    }
    console.log("Fill array: " + arr);
    return arr;
}
//arr = fill(1,10,50,5);



/** Trying to refactor my pyramid stuff**/
/**  http://betterexplained.com/articles/techniques-for-adding-the-numbers-1-to-100/ **/
/**  forumula to sum an numbers up to & including n **/
/**  n * (n+1) / 2 **/

function gaussSum (n) {
    return  (n*(n+1)/2);
    console.log("Sum of Numbers up to " + n + ": " + total);
}



function randomize (){
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
}