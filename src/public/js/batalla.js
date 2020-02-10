let baseData;
let desafio;

function pokeApi() {

    const random = Math.floor(Math.random() * 150) + 1;

    const url = `https://pokeapi.co/api/v2/pokemon/${random}`;

    fetch(url)
        .then(e => {

            return e.json();
        })

    .then(data => {

        baseData = {
            name: data.name.toUpperCase(),
            id: data.id,
            image: data.sprites['front_default'],
            experience: data.base_experience,
            type: data.types.map(type => type.type.name).join(', '),
            ability: data.abilities.map(abilities => abilities.ability.name).join(', ')

        }

        display(baseData);
        displayTwo(baseData);
    })


};

const pokemonInfo = document.getElementById('pokemon-info');

const display = (data) => {

    const html =
        ` 

        <h1 class="name">${data.id}. ${data.name}</h1>
        <img class="image" src="${data.image}"/>
        </ br>
        <div class="info"> 
            <ul style="list-style: none;">
            <li><span>Pokedex Number:</span>  ${data.id}</li>
            <li><span>Pokemon Type:</span>  ${data.type}</li>
            <li><span>Pokemon Abilites:</span>  ${data.ability}</li>
            <li><span>Pokemon Experience:</span>  ${data.experience}</li>
            </ul>
        </div>
        `;

    pokemonInfo.innerHTML = html;
}

pokeApi();

const battlerTwo = document.getElementById('entrenador1');

function theChallenger() {

    const challenge = Math.floor(Math.random() * 150) + 1;

    const url = `https://pokeapi.co/api/v2/pokemon/${challenge}`;
    fetch(url)
        .then(e => {
            return e.json();
        })
        .then(data => {
            desafio = {
                name: data.name.toUpperCase(),
                id: data.id,
                image: data.sprites['front_default'],
                experience: data.base_experience,
                type: data.types.map(type => type.type.name).join(', '),
                ability: data.abilities.map(abilities => abilities.ability.name).join(', ')
            }
            displayBattle(desafio);
        })

};

const battlerOne = document.getElementById('entrenador2');

const displayBattle = (data) => {
    const html =
        ` 
       <h1 class="name">${data.id}. ${data.name}</h1>
       <img class="image" src="${data.image}"/>
       </ br>
       <div class="info"> 
           <ul style="list-style: none;">
           <li><span>Pokedex Number:</span>  ${data.id}</li>
           <li><span>Pokemon Type:</span>  ${data.type}</li>
           <li><span>Pokemon Abilites:</span>  ${data.ability}</li>
           <li><span>Pokemon Experience:</span>  ${data.experience}</li>
           </ul>
       </div>
       `;
    battlerOne.innerHTML = html;
}

function batalla(uno, dos) {

    if (uno.experience > dos.experience) {
        return window.alert(`${uno.name}, ES EL GANADOR!!!!   ${dos.name}  FUERA DE COMBATE!!!!`);
    } else {
        return window.alert(`${dos.name}, ES EL GANADOR!!!!   ${uno.name}  FUERA DE COMBATE!!!!`);
    }

}


const URL_POKEAPI = "https://pokeapi.co/api/v2/";

function displayInfo(data) {
    getPokemonData(data);
    const p = document.createElement('p');
    const textValue = document.createTextNode(data.firstToUpperCase());
    p.appendChild(textValue);
    document.getElementById('pokemon-list').appendChild(p);
}

// obtiene los datos de pokemones
function getPokemonData(name, index) {
    document.getElementById('error-message').style.display = "none";
    if (!requestedPokemons.includes(name)) {
        axios.get(URL_POKEAPI + 'pokemon/' + name).then(resp => {
            requestedPokemons.push(resp.data.name);
            displayPokemonInfo(resp.data, index);
        }).catch(error => {
            console.error(error);
            showErrorMessage(error);
        });
    }
}


let i = 1;

function getFirstTen() {
    const ii = i + 10;
    for (i; i < ii; i++) {
        getPokemonData(i, i);
    }
}


theChallenger();