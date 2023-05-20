function findAverage(array) {
  let count = 0
  if(array.length === 0) {
  return 0;      
  } else {
    for(let char of array) {
      count += char
    }
  }
  return count / array.length
}
findAverage([1,2,3,4])