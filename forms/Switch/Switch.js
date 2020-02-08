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
