const firstNumber = +prompt('Enter first number');
const secondNumber = +prompt('Enter second number');
const choice = prompt('What would you like to do: add? sub? mult? div?');
if(choice === 'add' && isNaN(firstNumber) === false && isNaN(secondNumber) === false) {
  const sum = firstNumber + secondNumber;
  alert(firstNumber + '+' + secondNumber + '=' + sum);
} else if(choice === 'sub' && isNaN(firstNumber) === false && isNaN(secondNumber) === false) {
  const sub = firstNumber - secondNumber;
  alert(firstNumber + '-' + secondNumber + '=' + sub);
} else if(choice === 'mult' && isNaN(firstNumber) === false && isNaN(secondNumber) === false) {
  const mult = firstNumber * secondNumber;
  alert(firstNumber + '*' + secondNumber + '=' + mult);
} else if(choice === 'div' && isNaN(firstNumber) === false && isNaN(secondNumber) === false) {
  const div = firstNumber / secondNumber;
  alert(firstNumber + '/' + secondNumber + '=' + div);
} else {
  alert('Sorry, you didnt make a choice or your value is not a number');
}