function expandedForm(num) {
    let str = num.toString().split("").reverse()
    let arr = str.map(function(char, index) {
      return char * Math.pow(10, index)
    })
    let res = arr.filter(function(char) {
      return char > 0
    })
    return res.reverse().join(" + ")
  }
  console.log(expandedForm(70304))