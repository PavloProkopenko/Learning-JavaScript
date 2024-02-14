var score = 100
var scoreString = "100"

// Checks only value (we don't checking type of variables)
console.log(score == scoreString) // <- true

// Checks both type and value
console.log(score === scoreString) // <- false

// Checking results of test where we added operator "not (!)"
console.log(score != scoreString) // <- false
console.log(score !== scoreString) // <- true

var score = 8;
console.log("Mid-level skills:" , score > 0 && score < 10)