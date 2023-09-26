const choice = prompt('What would you like to do: add? sub? mult? div?');
const firsNumber = prompt('Enter first number');
const secondNumber = prompt('Enter second nummber');
if(choice === 'add') {
  const sum = Number(firsNumber) + Number(secondNumber);
  alert(firsNumber + '+' + secondNumber + '=' + sum);
} else if(choice === 'sub') {
  const sub = firsNumber - secondNumber;
  alert(firsNumber + '-' + secondNumber + '=' + sub);
} else if(choice === 'mult') {
  const mult = firsNumber * secondNumber;
  alert(firsNumber + '*' + secondNumber + '=' + mult);
} else if(choice === 'div') {
  const div = firsNumber / secondNumber;
  alert(firsNumber + '/' + secondNumber + '=' + div);
} else {
  alert('You didnt make a choice');
}