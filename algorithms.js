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
    return arr;
}
arr = fill(1,10,50,5);

console.log(arr);

/** Trying to refactor my pyramid stuff**/
/**  http://betterexplained.com/articles/techniques-for-adding-the-numbers-1-to-100/ **/
/**  forumula to sum an numbers up to & including n **/
/**  n * (n+1) / 2 **/

function gaussSum (n) {
    return  (n*(n+1)/2);
}

total = gaussSum(3);

console.log(total);