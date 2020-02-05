//gets variables
let firstName = prompt("Please enter your first name: ")
let userState = prompt("Please enter your state (abbreviation): ")
let userTemp = prompt("Please enter the temperature: ")

//converts State to uppercase
var upperState = userState.toUpperCase()

//convert first letter of name to uppercase
const nameCapitalized = firstName.charAt(0).toUpperCase() + firstName.slice(1)

//puts messages into an array
let messageArray = [`${firstName}, wear a warm coat, hat, scarf and gloves.`, `${firstName}, wear a warm coat, but you won't need a hat, scarf or gloves.`, `${firstName}, wear your warmest coat, a warm hat, a scarf, and warm gloves.`, `${firstName}, wear a warm coat, hat, and gloves. Maybe a scarf too.`]

//output of messages
if (userState = "NE" && userTemp < 32) {
  NSB.MsgBox(messageArray[0])
} else if (userState = "NE" && 32 < userTemp < 50) {
  NSB.MsgBox(messageArray[1])
} else if (userState = "FL" && 32 < userTemp < 50) {
  NSB.MsgBox(messageArray[2])
} else if (userState = "FL" && 50 < userTemp < 70) {
  NSB.MsgBox(messageArray[3])
} else {
  NSB.MsgBox("Please retry!")
}