// Exercise 1.7 Starts Here: 

// New IIFE #2 Starts Here:

let PokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector('.pokemon-list');

    let listItem = document.createElement('li');

    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn', 'text-capitalize', 'btn-primary');
    
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokemonModal');

    button.addEventListener('click', function () {
      showDetails(pokemon);
    });

    listItem.appendChild(button);
    pokemonListElement.appendChild(listItem);
  }



  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      pokemon.height = details.height;
      pokemon.types = details.types;
      pokemon.imageUrl = details.sprites.front_default;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {
    $('#pokemonModalLabel').text(pokemon.name);
    $('#pokemon-details-text').text('Height: ' + pokemon.height);
    $('#pokemon-image').attr('src', pokemon.imageUrl);
    $('#pokemonModal').modal('show');
  }

  

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

PokemonRepository.loadList().then(function () {
  PokemonRepository.getAll().forEach(function (pokemon) {
    PokemonRepository.addListItem(pokemon);
  });
});
































