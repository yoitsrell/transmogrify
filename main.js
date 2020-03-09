function biggify(num){
newNum = num + 9000
{
  return newNum
}
}
console.log(biggify(30))

function nasafy(count){
let newArray =[]

for(i = count; i >= 1; i--) //had i set to >=0 and kept failing -_-
{
  newArray.push(i)
}
console.log(newArray) 
newArray.push("Blast off!")
return newArray
}
console.log(nasafy(10))

function reversify(str){
let newStr = ""

for(let i=str.length - 1; i >=0; i--) 
{
newStr += str[i]
}
return(newStr)
}

console.log(reversify("testing"))

function titleify(str){
let title = ""

for(let i = 0; i < str.length; i++){
  if(i === " "){
    
  }

}
}
console.log(titleify("she"))
  
function crazify(str){
let output = ""

for (let i = 0; i < str.length; i++){
  if (i % 2 === 1){
    output = output + str[i].toUpperCase()
  }else if( i % 2 === 0){
    output = output + str[i].toLowerCase()
  }
  else if(i === " "){

  }
  
}
return output
  }




////////////////////////////////////////////////////
if (typeof biggify === 'undefined') {
  biggify = undefined;
}

if (typeof nasafy === 'undefined') {
  nasafy = undefined;
}

if (typeof reversify === 'undefined') {
  reversify = undefined;
}

if (typeof titleify === 'undefined') {
  titleify = undefined;
}

if (typeof crazify === 'undefined') {
  crazify = undefined;
}


module.exports = {
  biggify,
  nasafy,
  reversify,
  titleify,
  crazify,
}
