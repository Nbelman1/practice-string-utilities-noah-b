// Part 1: Initial Setup
// 1. Create a new project folder named string-utilities.
// 2. Inside the folder, create the following files:
// ○ stringUtils.js: This will be the custom module.
// ○ app.js: This will be the main file where the module is tested.
// Part 2: Practicing String Utilities
// 1. Create the stringUtils.js Module:
// ○ Define and export the following functions:
// ■ capitalize(str): Converts the first letter of a string to
// uppercase.
// ■ reverse(str): Reverses the characters in a string.
// ■ contains(str, substr): Checks if a substring exists within a
// string and returns true or false.
// 2. Test the Module in app.js:
// ○ Import the stringUtils.js module into app.js.
// ○ Test each function with different string inputs and log the results to
// the console.
// 3. Ensure Reusability:
// ○ Design the module functions to handle edge cases, such as empty
// strings or undefined inputs.

function capitalize(str) {
    if (!str || typeof str !== 'string') 
        return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseStr(str) {
    if (!str || typeof str !== 'string')
        return '';
    return str.split('').reverse().join('');
}

function contains(str, substr) {
    if (typeof str !== 'string')
        return false;
    if (typeof substr !== 'string')
        return false;
    return str.includes(substr);
}

module.exports = { capitalize, reverseStr, contains };