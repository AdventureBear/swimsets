
/*
function () {
    if (pattern === "Pyramid 3") {
        pyramid = 3;
        rounds = Math.floor(parseInt(totalDist.val()) / (gaussSum(pyramid) * 25));
        practiceSet = pattern + "<br /> Rounds: " + rounds + "<br />";
    } else if (pattern === "Pyramid 4") {
        rounds = Math.floor(parseInt(totalDist.val()) / (10 * 25));
        practiceSet = pattern + "<br /> Rounds: " + rounds + "<br />";
    } else if (pattern === "Pyramid 5") {
        rounds = Math.floor(parseInt(totalDist.val()) / (15 * 25));
        if (rounds < 1) {
            //
        }
        practiceSet = pattern + "<br /> Rounds: " + rounds + "<br />";
    }
}
 */
function gaussSum (n) {
    return  (n*(n+1)/2);
}

total = gaussSum(3);

console.log(total);