// In 🎅 Santa's workshop, some Christmas messages have been written in a peculiar way: the words within the brackets must be read backwards.

// Santa needs these messages to be correctly formatted. 
// Your task is to write a function that takes a string and reverses the characters within each pair of parentheses, removing the parentheses as well.

// However, bear in mind that there may be nested parentheses, so you should reverse the characters in the correct order.

function decode(message) {
  let stack = [];
  let result = '';

  for (let char of message) {
    if (char === '(') {
      // Push the current result to the stack and reset it
      stack.push(result);
      result = '';
    } else if (char === ')') {
      // Pop the previous result from the stack and reverse it
      result = stack.pop() + result.split('').reverse().join('');
    } else {
      // Append characters to the current result
      result += char;
    }
  }

  return result;
}
