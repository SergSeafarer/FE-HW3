const choice = prompt('What would you like to do: add? sub? mult? div?');
if(choice === 'add') {
  const firsNumber = prompt('Enter first number');
  const secondNumber = prompt('Enter second nummber');
  const sum = Number(firsNumber) + Number(secondNumber);
  alert(firsNumber + '+' + secondNumber + '=' + sum);
} else if(choice === 'sub') {
  const firsNumber = prompt('Enter first number');
  const secondNumber = prompt('Enter second nummber');
  const sub = firsNumber - secondNumber;
  alert(firsNumber + '-' + secondNumber + '=' + sub);
} else if(choice === 'mult') {
  const firsNumber = prompt('Enter first number');
  const secondNumber = prompt('Enter second nummber');
  const mult = firsNumber * secondNumber;
  alert(firsNumber + '*' + secondNumber + '=' + mult);
} else if(choice === 'div') {
  const firsNumber = prompt('Enter first number');
  const secondNumber = prompt('Enter second nummber');
  const div = firsNumber / secondNumber;
  alert(firsNumber + '/' + secondNumber + '=' + div);
} else {
  alert('You didnt make a choice');
}