function spacey(array){
    let word = ''
    let arr = []
    for(let i = 0; i < array.length; i++) {
      arr.push(word += array[i])
    }
    return arr
  }
  spacey(['kevin', 'has','no','space'])