module.exports = function check(str, bracketsConfig) {
  // your solution
  var stack = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j][0] == bracketsConfig[j][1]) {
        if (str[i] == bracketsConfig[j][0]) {
          if (stack.length > 0 && j == stack[stack.length-1]) {
            stack.pop();
            break;
          } else {
            stack.push(j);
            break;
          }
        }
      } else {
        if (str[i] == bracketsConfig[j][0]) {
          stack.push(j);
          break;
        } else {
          if (str[i] == bracketsConfig[j][1]) {
            if (stack.length > 0 && j == stack[stack.length-1]) {
              stack.pop();
              break;
            } else {
              return false;
            }
          }
        }
      }
    }
  }
  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
}
