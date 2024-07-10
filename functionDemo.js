/*
    In Python:

    def printHello():
        print("Hello")
*/

function printHello()
{
    // Output statement
    console.log('Hello');
}

// Use the name of the function 
printHello();

// Add two values together
function addition(a, b)
{
    // Return the sum
    return a + b;
}

// Display a result of the function call
console.log(addition(100, 50));

// Store the result in a variable
let result = addition(1000, 999);

// Display the variable
console.log(result)

// Array of cohort students
let cohortMembers = ["Cindy", "Bri", "Josh", "Aaron"];
// function that processes an array
function arrayDisplay(cohortList)
{
    for (let i = 0; i < cohortList.length; i++)
    {
        console.log(cohortList[i]);
    }
}

// Call the arrayDisplay function
arrayDisplay(cohortMembers);

// Console log to display a line of dashes
console.log("-------------------")

// Array of movie ratings
let movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

// Make a mean function
    // Take the sum of all of the values
    // Then divide by the count (length of the array) of all of the values 
function mean(scoreList)
{
    // Declare a variable that holds the running total
    let total = 0;

    // Use a loop to loop through the array and add on to the running total
    for(let i = 0; i < scoreList.length; i++)
    {
        total += scoreList[i];    
    }

    // Return the total / length of the array
    return total / scoreList.length;
}

// Make a variance
    // Take each value, substract the mean, square the difference, add on to the total squared differences,
    // then take an average of the squared differences

    function variance(scoreList)
    {
        // Variable to hold the total of squared differences
        let total = 0;
        // Get the mean from the mean function
        let meanValue = mean(scoreList);
        // Loop through the array and take the square differences of values from the means
        // and add on to the total squared differences
        for (let i = 0; i < scoreList.length; i++)
        {
            total += (scoreList[i] - meanValue) ** 2; // Using ** raises a value to a power
        }
        // Calculate and return the variance
        return total / scoreList.length;
    }

// Print to the console the Movie Statistical Analysis
console.log("Movie Statistical Analysis");
console.log("--------------------------");
console.log(`The mean is : ${mean(movieScore).toFixed(2)}`);
console.log(`The variance is : ${variance(movieScore).toFixed(2)}`);
console.log(`The standard deviation is : ${Math.sqrt(variance(movieScore)).toFixed(2)}`);