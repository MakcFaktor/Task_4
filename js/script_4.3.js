let sportsChampions = {
  футбол: "Ліонель Мессі",
  теніс: "Рафаель Надаль",
  баскетбол: "Леброн Джеймс",
};

let birthYear = prompt("Введіть ваш рік народження:");

let city = prompt("Введіть ваше місто проживання:").toLocaleLowerCase();

let favoriteSport = prompt("Введіть ваш улюблений вид спорту:");

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

let message = "";
if (favoriteSport in sportsChampions) {
  let champion = sportsChampions[favoriteSport];
  message = `Круто! Хочеш стати як${champion}?`;
} else {
  message = `Ваш вік: ${age} років.\n`;
  if (city === "київ" || city === "вашингтон" || city === "лондон") {
    message += `Ти живеш у столиці ${getCountry(city)}.`;
  } else {
    message += `Ти живеш у місті ${city.charAt(0).toUpperCase() + city.slice(1)}.`;
  }
}
alert(message);

function getCountry(capital) {
  switch (capital) {
    case "київ":
      return "України";
    case "вашингтон":
      return "США";
    case "лондон":
      return "Великої Британії";
    default:
      return "невідомої країни";
  }
}
