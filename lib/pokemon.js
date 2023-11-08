// TODO write your code here
const template = document.querySelector("#infoTemplate");
const results = document.querySelector("#cardsContainer")
fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
.then((response) => response.json())
.then((data) => {
  //console.log(data.results);
  data.results.forEach((pokemon) => {
    fetch(pokemon.url)
    .then ((response) => response.json())
    .then((pokemondata) => {
      // get info from fetch request
      const typeName = pokemondata.types[0].type.name
      const image = pokemondata.sprites.front_default
      // setup the clone
        const clone = template.content.cloneNode(true);
        clone.querySelector("img").src = image;
        clone.querySelector("h2").textContent = pokemon.name;
        clone.querySelector("p").textContent = typeName;
      // insert the clone into HTML
      results.appendChild(clone)
    })
  });
})



