//gets variables
let firstName = prompt("Please enter your first name: ")
let userState = prompt("Please enter your state (abbreviation): ")
let userTemp = prompt("Please enter the temperature: ")

//converts State to uppercase
var upperState = userState.toUpperCase()

//convert first letter of name to uppercase
let nameCapitalized = firstName.charAt(0).toUpperCase() + firstName.slice(1);

//puts messages into an array
let messageArray = [`${nameCapitalized}, wear a warm coat, hat, scarf, and gloves.`, `${nameCapitalized}, wear a warm coat, but you won't need a hat, scarf or gloves.`, `${nameCapitalized}, wear your warmest coat, a warm hat, a scarf, and warm gloves.`, `${nameCapitalized}, wear a warm coat, hat, and gloves. Maybe a scarf too.`]

//output of messages with switch
switch(true) {
  case (upperState == "NE" && userTemp < '32') :
    NSB.MsgBox(messageArray[0])
    break
  case (upperState == "NE" && '32' < userTemp && userTemp < '50') :
    NSB.MsgBox(messageArray[1])
    break
  case (upperState == "FL" && '32' < userTemp && userTemp < '50') :
    NSB.MsgBox(messageArray[2])
    break
  case (upperState == "FL" && '50' < userTemp && userTemp < '70') :
    NSB.MsgBox(messageArray[3])
    break
  default :
    NSB.MsgBox("Please retry!")
}
