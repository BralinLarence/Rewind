//Get the values of the string
//Controller function
function getValue()
{
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let reversedString = reverseString(userString);

    displayString(reversedString);
}

//Reverse the string
//Logic function
function reverseString(_userString)
{
    let reversedString = [];

    for(let index = _userString.length - 1; index >= 0; index--)
    {
        reversedString += _userString[index];
    }

    return reversedString;
}

//Display the reversed string to the user
//View function 
function displayString(_reversedString)
{
    //Write to thje page 
    document.getElementById("message").innerHTML =  `Your string reversed is: ${_reversedString}`;
    // Show the alert box
    document.getElementById("alert").classList.remove("invisible");
}