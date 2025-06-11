let varGlobalPokemonRepository = (function () {          // Start of IIFE 
    // Start of Array
    let varPokemonListArray = [
        {
            name: "Bulbasaur",
            height: 7,
            types: ["grass", "poison"]
        },
        {
            name: "Charmander",
            height: 6,
            types: ["fire"]
        },
        {
            name: "Squirtle",
            height: 5,
            types: ["water"]
        }
    ];





    // Function to Return all the Pokémon from the list
    function fgetAll() {
        return varPokemonListArray;
    }


    // Function to add new pokemon to the list
    function fadd(item) {
        varPokemonListArray.push(item);
    }


    // Creating an unordered list that displays each Pokemon
    function fdisplayListItem(varSinglePokemon) {
        let varUlElement = document.querySelector(".pokemon-list");

        let varLiElement = document.createElement("li");

        // Creating a button that holds and displays each Pokemon
        let varButtonOne = document.createElement("button");
        varButtonOne.innerText = varSinglePokemon.name;
        varButtonOne.classList.add("button-one");
        varButtonOne.addEventListener('click', function (event) {
            fshowDetails(varSinglePokemon);
        })

        // Appending child elements inside parent elements
        varLiElement.appendChild(varButtonOne);
        varUlElement.appendChild(varLiElement);
    }


    // Creating a function to disaply the details of each Pokemon when the button is clicked
    function fshowDetails(varDetailsOfOnePokemonObject) {
        console.log(varDetailsOfOnePokemonObject);
    }


    // Return Statement for all the Functions
    return {
        fgetAll: fgetAll,
        fadd: fadd,
        fdisplayListItem: fdisplayListItem
    };

    
})();          // End of IIFE





/* Creating a new variable that holds the global variable inside it,
so that we can call on the local function fgetAll 
to display the list of all the Pokemon */
let varPokemonDisplayed = varGlobalPokemonRepository.fgetAll();





// Looping through each individual Pokemon, and displaying each Pokemon on the page
varPokemonDisplayed.forEach(function (varEachPokemonDisplayed) {
    varGlobalPokemonRepository.fdisplayListItem(varEachPokemonDisplayed);
});     









