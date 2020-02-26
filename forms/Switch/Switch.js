//gets variables
let firstName2 = prompt("Please enter another name: ")
let userState2 = prompt("Please enter another state (abbreviation): ")
let userTemp2 = prompt("Please enter another temperature: ")

//converts State to uppercase
var upperState2 = userState2.toUpperCase()

//convert first letter of name to uppercase
let nameCapitalized2 = firstName2.charAt(0).toUpperCase() + firstName2.slice(1);

//puts messages into an array
let messageArray2 = [`${nameCapitalized2}, wear a warm coat, hat, scarf, and gloves.`, `${nameCapitalized2}, wear a warm coat, but you won't need a hat, scarf or gloves.`, `${nameCapitalized2}, wear your warmest coat, a warm hat, a scarf, and warm gloves.`, `${nameCapitalized2}, wear a warm coat, hat, and gloves. Maybe a scarf too.`]

//output of messages with switch
switch(true) {
  case (upperState2 == "NE" && userTemp2 < '32') :
    NSB.MsgBox(messageArray2[0])
    break
  case (upperState2 == "NE" && '32' < userTemp2 && userTemp2 < '50') :
    NSB.MsgBox(messageArray2[1])
    break
  case (upperState2 == "FL" && '32' < userTemp2 && userTemp2 < '50') :
    NSB.MsgBox(messageArray2[2])
    break
  case (upperState2 == "FL" && '50' < userTemp2 && userTemp2 < '70') :
    NSB.MsgBox(messageArray2[3])
    break
  default :
    NSB.MsgBox("Please retry!")
}
