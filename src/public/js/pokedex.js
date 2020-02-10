const URL_POKEAPI = "https://pokeapi.co/api/v2/";

// Lista de pokemones consultados
const requestedPokemons = [];

const inputRef = document.querySelector('#buscador');
const abilitiesListRef = document.querySelector('#abilities');
const typesListRef = document.querySelector('#types');


async function buscarPokemon() {

    const pokemon = await buscarPokemonAsincrono(inputRef.value);
    const { id, name } = pokemon;

    document.querySelector('#pokemon-name').innerHTML = name;

    document.querySelector('#pokemon-sprite').src = pokemon.sprites.front_default;

    //Abilities
    pokemon.abilities.forEach(ability => {

        let abilityTag = document.createElement('li');
        abilityTag.innerHTML = ability.ability.name;
        abilitiesListRef.appendChild(abilityTag);
    })

    // types
    pokemon.types.forEach(type => {

        let typeTag = document.createElement('li')
        typeTag.innerHTML = type.type.name
        typesListRef.appendChild(typeTag)
    })

}
async function buscarPokemonAsincrono(pokemon) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    return await response.json()
}

document.getElementById('username').onkeyup = function() {

}

// obtiene los datos de pokemones
async function getPokemonData(name, index) {
    if (!requestedPokemons.includes(name)) {
        const resp = await axios.get(URL_POKEAPI + 'pokemon/' + name)
        mostrarInformacionPokemon(resp.data, index);
    }
}

function mostrarInformacionPokemon(data) {

    const tableList = document.getElementById('pokemon-list').getElementsByTagName('tbody')[0];
    const row = tableList.insertRow();

    const insertarID = row.insertCell();
    const insertarNombre = row.insertCell();
    const insertarImagen = row.insertCell();
    const insertarHabilidades = row.insertCell();
    const insertarTipo = row.insertCell();

    const listaHabilidades = document.createElement('ul');

    data.abilities.reverse().map(abilities => {
        const liAbility = document.createElement('li');
        liAbility.innerHTML = abilities.ability.name;
        listaHabilidades.appendChild(liAbility);
    });

    insertarHabilidades.append(listaHabilidades);

    const typesList = document.createElement('ul');
    data.types.map(types => {
        const typeLi = document.createElement('li');
        typeLi.innerHTML = types.type.name;
        typesList.appendChild(typeLi);
    });
    insertarTipo.append(typesList);

    const img = document.createElement('img');
    img.src = data.sprites.front_shiny;
    img.title = data.name;
    insertarImagen.append(img);
    insertarID.innerHTML = data.id;
    insertarNombre.innerHTML = data.name;

}

let i = 1;

// For para que muestre de a 10 Pokemones
async function getFirstTen() {
    const ii = i + 10;
    for (i; i < ii; i++) {
        await getPokemonData(i, i);
    }
}