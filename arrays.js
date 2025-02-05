var arr = ["mama", 32]
var aarr = ["manu", 34]
console.log(arr)
console.log(aarr)

//nested array
var myarr = [["67", 76], [45, 56]]
console.log(myarr)
//2D array index access
console.log(myarr[1][0])

//modify element
arr[0] = "suma"
console.log(arr)

//push: add at last
myarr.push(["manu,76"])
console.log(myarr)
//pop:delete from last
myarr.pop()
console.log(myarr)
//shift:delete from beginning
var array1 = [12, 23, 34, 45, 56]
array1.shift()
console.log(array1)
var array2 = [[12, 23], [34, 45], [23, 56]]
array2.shift()
console.log(array2)
//unshift:add at beginning
var array2 = [[12, 23], [34, 45], [23, 56]]
array2.unshift([23, 76])
console.log(array2)
