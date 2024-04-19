let nameProfile = prompt("Введіть ваше ім'я:");

// Перевірка, чи не містить рядок жодних цифр
if (!nameProfile) {
  alert("Ви не ввели ім'я.");
} else if (!/\d/.test(nameProfile)) {
  alert(`Привіт, ${nameProfile}! Як справи?`);
} else {
  alert("Ім'я не повинно містити цифри.");
}
