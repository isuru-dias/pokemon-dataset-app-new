let varGlobalPokemonRepository = (function() {
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
    },
];

function fgetAll () {
    return varPokemonListArray
}

function fadd (item) {
    varPokemonListArray.push(item);
}

return {
    fgetAll: fgetAll,
    fadd: fadd
};

})();

let varPokemonDisplayed = varGlobalPokemonRepository.fgetAll();

varPokemonDisplayed.forEach(function (varEachElementDisplayed) {
    console.log(varEachElementDisplayed)
})




