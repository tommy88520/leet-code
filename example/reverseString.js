function reverse(s){
  // const string = 'nfdkhfjldhsa';
  // const length = string.length - 1
  // let s = '';
  // for (let i = length; i >= 0; i--) {
  //   s += string.charAt(i)
  // }
  // console.log(s)

  if (s == '') {
    return ''
  }

  return reverse(s.substring(1)) + s.charAt(0)
  
}

const result = reverse('nfdkhfjldhsa')

console.log(result)