function breakOut(array, changeValue, stopValue){
  for (let i=0; i<array.length;i++){
    if (array[i]===stopValue){
      break;
    } else
    array[i]=changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for (let i=0; i<array.length;i++){
    if (array[i]===skipValue){
      continue;
    } else
    array[i]=changeValue;
  }
  return array;
}

// function findBy(array, findFn){
//   let found=array.indexOf(findFn())
//   if (found === -1){
//     return null;
//   } else
//   return array[found];
// }

function findBy(array, findFn){
  for (let i = 0; i<array.length;i++){
    debugger;
    if (findFn(array[i])){
      return array[i]
    }
  }
  return null
}
