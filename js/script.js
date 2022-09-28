var spoonacularAPIKey = "af28c41e911742cab678a8ddcd93acaa";
// var cocktailAPIKey = "KxE5FMqtJE+cddRT34B6Vw==Qj3At9bRl1rlRw1Z";
var cocktailAPIKey = "d9d1de419cmsh3efe3d08141101ap1d1cdejsnd21e801ce08b"
var dinnerChoice = document.getElementById("dinnerInput").value;
var dinnerBtn = document.getElementById("dinnerBtn");
var cocktailChoice = document.getElementById("cocktailInput").value;
var cocktailBtn = document.getElementById("cocktailBtn");

// dinnerBtn.addEventListener('click', dinnerSearch);
// cocktailBtn.addEventListener('click', cocktailChoice);

// function cocktailSearch() {
// var cocktailSearch = document.getelementbyid("cocktailInput").value;
// console.log(cocktailSearch);
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/cocktail?name=' + cocktailSearch,
//     headers: { 'X-Api-Key': 'cocktailAPIKey'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });
// }


    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${cocktailInput}`)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${dinnerChoice}&type=${dinnerChoice}apiKey=${spoonacularAPIKey}`)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));



//         www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin

// cocktailSearch();


// function dinnerSearch() {

// }




