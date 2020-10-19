module.exports = function check(str, bracketsConfig) {
  let arrOpen = [];
  let arrClose = [];
  let counter = 0;
  let j = 0;
  for (let i = 0; i < bracketsConfig.length; i++){
      arrOpen.push(bracketsConfig[i][j]);
      arrClose.push(bracketsConfig[i][j + 1]);
  }
  let counterOpen = 0;
  let counterClose = 0;
  while (counter < arrOpen.length){
    for (let i = 0; i < str.length; i++){
      if (str[i] == arrOpen[counter]){
        counterOpen++;
      } 
      if (str[i] == arrClose[counter]){
        counterClose++;
      }
    }
    if (counterOpen != counterClose || counterOpen == 0){
      return false;
    }
    counter++; 
  }
  for (let i = 0; i < str.length; i++){
    if (str[i] == "]" && (str[i-1] == '(' || str[i-1] == '{')){
      return false;
    }
    if (str[i] == '|' && str[i-1] == '(' && str[i+1] == ')'){
      return false;
    }
    if (str[str.length-1] == arrOpen[i] && str[str.length-1] != '|'){
      return false;
    }
  }
  return true;
}

