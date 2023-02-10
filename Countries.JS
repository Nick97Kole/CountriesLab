class Country {
  constructor(name, language, hello, colors, flag) {
    this.name = name;
    this.language = language;
    this.hello = hello;
    this.colors = colors;
    this.flag = flag;
  }
  
  displayColors() {
    document.getElementById("country-name").innerHTML = this.name;
    document.getElementById("country-language").innerHTML = this.language;
    document.getElementById("hello-world").innerHTML = this.hello;
    document.body.style.background = this.colors[0];
    document.body.style.color = this.colors[1];
    document.getElementById("flag-img").src = this.flag;
  }
}

const countries = [
  new Country("USA", "English", "Hello World!", ["red", "white"], "flags/usa.png"),
  new Country("France", "French", "Bonjour le monde!", ["blue", "white"], "flags/france.png"),
  new Country("Spain", "Spanish", "Hola mundo!", ["red", "yellow"], "flags/spain.png"),
  new Country("Japan", "Japanese", "こんにちは世界!", ["red", "white"], "flags/japan.png"),
  new Country("Germany", "German", "Hallo Welt!", ["black", "red"], "flags/germany.png")
];

document.getElementById("country-select").addEventListener("change", function() {
  const selectedCountry = this.value;
  const foundCountry = countries.find(c => c.name === selectedCountry);
  if (foundCountry) {
    foundCountry.displayColors();
  } else {
    alert("Country not found");
  }
});

const select = document.getElementById("country-select");
for (const country of countries) {
  const option = document.createElement("option");
  option.value = country.name;
  option.text = country.name;
  select.appendChild(option);
}
