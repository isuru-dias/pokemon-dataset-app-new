// let varGlobalPokemonRepository = (function () {          // Start of IIFE 
//     // Start of Array
//     let varPokemonListArray = [];





//     // Function to Return all the Pokémon from the list
//     function fgetAll() {
//         return varPokemonListArray;
//     }


//     // Function to add new pokemon to the list
//     function fadd(item) {
//         varPokemonListArray.push(item);
//     }





//     // Creating an unordered list that displays each Pokemon
//     function fdisplayListItem(varSinglePokemon) {
//         let varUlElement = document.querySelector(".pokemon-list");

//         let varLiElement = document.createElement("li");

//         // Creating a button that holds and displays each Pokemon
//         let varButtonOne = document.createElement("button");
//         varButtonOne.innerText = varSinglePokemon.name;
//         varButtonOne.classList.add("button-one");
//         varButtonOne.addEventListener('click', function (event) {
//             fshowDetails(varSinglePokemon);
//         })

//         // Appending child elements inside parent elements
//         varLiElement.appendChild(varButtonOne);
//         varUlElement.appendChild(varLiElement);
//     }


//     // Creating a function to disaply the details of each Pokemon when the button is clicked
//     function fshowDetails(varDetailsOfOnePokemonObject) {
//         console.log(varDetailsOfOnePokemonObject);
//         console.log(loadDetails(varDetailsOfOnePokemonObject));
//     }


//     // Return Statement for all the Functions
//     return {
//         fgetAll: fgetAll,
//         fadd: fadd,
//         fdisplayListItem: fdisplayListItem
//     };


// })();          // End of IIFE





// /* Creating a new variable that holds the global variable inside it,
// so that we can call on the local function fgetAll 
// to display the list of all the Pokemon */
// let varPokemonDisplayed = varGlobalPokemonRepository.fgetAll();


// // Looping through each individual Pokemon, and displaying each Pokemon on the page
// varPokemonDisplayed.forEach(function (varEachPokemonDisplayed) {
//     varGlobalPokemonRepository.fdisplayListItem(varEachPokemonDisplayed);
// });     

























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
      button.classList.add('button-one');
  


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
      }).catch(function (e) {
        console.error(e);
      });
    }
  


    function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        console.log(pokemon); 
      });
    }
  


    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails
    };
  })();

// End of IIFE #2





// Calling on the Functions from IIFE #2
PokemonRepository.loadList().then(function () {
    PokemonRepository.getAll().forEach(function (pokemon) {
       PokemonRepository.addListItem(pokemon);
    });
  });

































