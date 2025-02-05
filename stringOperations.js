var myStr = "Jello world"
s = myStr.length//length of string
console.log(s)
myStr = "Hello world"//immutable string
console.log(myStr)

var firstName = "Mousumi"
var thirdToLetterOfFirstName = firstName[firstName.length - 3]
var lastName = "Mohanty"
var secondToLastLetterOfLastName = lastName[lastName.length - 2]
console.log(firstName)
console.log(thirdToLetterOfFirstName)
console.log(lastName)
console.log(secondToLastLetterOfLastName)

//word blank
function word(name, id) {
    var result = ""
    result += "my name is " + name + " and id is " + id
    return result
}
console.log(word("mama", "4"))
console.log(word("rima", "8"))