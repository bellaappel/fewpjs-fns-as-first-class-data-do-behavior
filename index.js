/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  let parsedInt = string.split(":");
  parsedInt = `${parsedInt[0]}${parsedInt[1]};`
  parsedInt = parseInt(parsedInt);
 if (parsedInt < 1200) {
    return "Good Morning";
  }
  else if (1700 >= parsedInt && parsedInt >= 1200) {
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  let greeting = document.getElementById('greeting');
  greeting.innerText = string;
}