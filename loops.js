/*
function forLoop(array) {
  for (let i = 0; i < 25; i++){
   if(i == 0){
    array.push(`"I am 1 strange loop."`)
  } else {
    array.push(`"I am ${i} strange loops."`)
  }
  }
  return array
}/*
function whileLoop(number){
  while(number >= 0){
    console.log(number)
    number = number--
  }
}
/*
let i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}
function doWhileLoop(integer){
  do{
    console.log('I run once regardless.')
  }while(incrementVariable() < integer)
}
*/
const forLoop = (array) => {
  for (let i = 0; i < 25; i++){
    [array][i] = (`"I am ${i} strange loop${i === 0 ? '' : 's'}"`)
  }
}
