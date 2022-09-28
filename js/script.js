var spoonacularAPIKey = "af28c41e911742cab678a8ddcd93acaa";
// var cocktailAPIKey = "KxE5FMqtJE+cddRT34B6Vw==Qj3At9bRl1rlRw1Z";
var cocktailAPIKey = "d9d1de419cmsh3efe3d08141101ap1d1cdejsnd21e801ce08b"
var dinnerChoice = document.getElementById("dinnerInput").value;
var dinnerBtn = document.getElementById("dinnerBtn");
var cocktailChoice = document.getElementById("cocktailInput").value;
var cocktailBtn = document.getElementById("cocktailBtn");
var rightCard = document.getElementById("right");
var leftCard = document.getElementById("left");

// dinnerBtn.addEventListener('click', dinnerChoice);
// cocktailBtn.addEventListener('click', cocktailChoice);


// // If user wants to filter by cuisine, fetch this
// if (chooseCuisine === true) {
// fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularAPIKey}&cuisine=${dinnerChoice}`)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));
// };

    
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${cocktailInput}`)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
// // If user wants to filter by diet, fetch this
// if (chooseDiet === true) {
// fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularAPIKey}&diet=${dinnerChoice}`)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));
// };

// // If user wants to filter by type (such as main course, side dish, or snack), fetch this
// if (chooseType === true) {
//     fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularAPIKey}&type=${dinnerChoice}`)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
//     };

fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${dinnerChoice}&type=${dinnerChoice}apiKey=${spoonacularAPIKey}`)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

document.getElementById(image).appendChild(cocAPI)

//         www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin

// cocktailSearch();


// function dinnerSearch() {

// }

// // If user wants to filter by dietary intolerances (such as peanut, gluten, or dairy allergy), fetch this
// if (chooseIntolerance === true) {
//     fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularAPIKey}&intolerances=${dinnerChoice}`)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
//     };




    // If user wants to filter cocktail search criteria by name (such as margarita), fetch this
// fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailChoice}`)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));

    // If user wants to filter cocktail search by ingredient (such as vodka), fetch this
// fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${cocktailChoice}`)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));

    // If user wants to filter cocktail search by simply pressing a letter and returning results that have that letter as the first letter, fetch this
// fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${cocktailChoice}`)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));

    // If user wants to filter cocktail search by category (such as ordinary drink or cocktail), fetch this
// fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?c=${cocktailInput}`)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));


// If user wants to get a random cocktail, fetch this
// fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));







// Wrap each filter search inside of two separate functions that are each called when user presses search button for both cocktail and food searches?



