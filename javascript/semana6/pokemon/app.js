const getPokemons = document.querySelector("#get-pokemons")
const apiPokemons = "https://pokeapi.co/api/v2/pokemon"


getPokemons.onclick = async function () {
    const respuesta = await fetch(apiPokemons)
    const data = await respuesta.json()
    console.log(data.results) 

}
