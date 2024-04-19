let number = prompt("Введіть тризначне число:");

if (!number) {
  alert("Ви не ввели число.");
} else if (number.length < 3) {
  alert("Мало цифр");
} else if (number.length > 3) {
  alert("Багато цифр");
} else {
  let numberString = number.toString();

  let allDigitsSame =
    numberString.charAt(0) === numberString.charAt(1) &&
    numberString.charAt(1) === numberString.charAt(2);

  let anyDigitsSame =
    numberString.charAt(0) === numberString.charAt(1) ||
    numberString.charAt(1) === numberString.charAt(2) ||
    numberString.charAt(0) === numberString.charAt(2);

  if (allDigitsSame) {
    console.log("Всі цифри однакові.");
  } else {
    console.log("Не всі цифри однакові.");
  }
  if (anyDigitsSame) {
    console.log("Серед цифр є однакові.");
  } else {
    console.log("Серед цифр немає однакових.");
  }
}
