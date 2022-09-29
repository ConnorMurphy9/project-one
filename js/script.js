var spoonacularAPIKey = "af28c41e911742cab678a8ddcd93acaa";
var cocktailAPIKey = "d9d1de419cmsh3efe3d08141101ap1d1cdejsnd21e801ce08b";
// var dinnerChoice = document.getElementById("dinnerInput").value;
var dinnerBtnEl = document.getElementById("dinnerBtn");
var cocktailChoiceEl = document.getElementById("cocktailInput");
var cocktailBtnEl = document.getElementById("cocktailBtn");
var rightCardEl = document.getElementById("right");
var leftCardEl = document.getElementById("left");
var drink1El = document.getElementById("drink1");
var drink2El = document.getElementById("drink2");
var drink3El = document.getElementById("drink3");
var dimg1El = document.getElementById("dimg1");
var dimg2El = document.getElementById("dimg2");
var dimg3El = document.getElementById("dimg3");
var food1El = document.getElementById("food1");
var food2El = document.getElementById("food2");
var food3El = document.getElementById("food3");
var carouselInner = document.getElementById("carouselInner");
var cocktailData;
var cocktailInfo1 = "";
var cocktailInfo2 = "";
var cocktailInfo3 = "";
// dinnerBtn.addEventListener('click', dinnerChoice);
// cocktailBtn.addEventListener('click', cocktailChoice);

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

// If user wants to search by cuisine (such as Japanese or Mexican) fetch this
// fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${dinnerChoice}&type=${dinnerChoice}apiKey=${spoonacularAPIKey}`)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

// // If user wants to filter by dietary intolerances (such as peanut, gluten, or dairy allergy), fetch this
// if (chooseIntolerance === true) {
//     fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularAPIKey}&intolerances=${dinnerChoice}`)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
//     };

// document.getElementById(image).appendChild(cocAPI)

//         www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin

// cocktailSearch();

// function dinnerSearch() {

// }

// If user wants to search by cocktail ingredient, fetch this
// fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${cocktailInput}`)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

// If user wants to filter cocktail search criteria by name (such as margarita), fetch this
cocktailBtnEl.addEventListener("click", cocktailNameSearch);
function cocktailNameSearch() {
  //
  let cocktailData = cocktailChoiceEl.value;
  //     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailChoice}`)
  //         .then(response => response.json())
  //         .then(function(data) {console.log(data);
  //  var cocktailInfo1 = document.getElementById("drink1");
  //             cocktailInfo1.innerHTML = `<h2 id="drinkName1">${data.drinks[0].strDrink}</h2><p
  //             id="ingredients">Ingredients:${data.drinks[0]}`
  console.log(cocktailData);
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailData}`,
    {headers: {
        // "Access-Control-Allow-Origin": "*",
        // "Content-Type": "application/json"
    }
    }

  )
    .then((response) => response.json())
    .then(function (data) {
      if (data.drinks.length === 0) {
        console.warn("no drink data");
        return;
      }
      for (let x = 0; x < data.drinks.length; x++) {
        var obj = data.drinks[x];
        console.log(data);
        console.log("herrrrrererere", Object.entries(obj));
        console.log("obj", obj);
        const carouselDiv = document.createElement("div")
        carouselDiv.setAttribute("class", "carousel-item")
        if (x === 0) carouselDiv.setAttribute("class", "carousel-item active")
        const img = document.createElement("img")
        // img.crossOrigin = "Anonymous";
        img.setAttribute("src", obj.strImageSource || obj.strDrinkThumb);
        console.log(obj.strImageSource);
        carouselDiv.appendChild(img)

        const ingredientDiv = document.createElement("div");
        carouselDiv.appendChild(ingredientDiv);

        ingredientDiv
        var ingredientArray = Object.entries(obj).slice(17, 32);
        console.log("ingredientArray", ingredientArray);
        cocktailInfo1.innerHTML = "";
        for (let i in ingredientArray) {
          //(var i=0; i<ingredientArray.length; i++);
          if (ingredientArray[i][1] != null) {
            let p = document.createElement("p");
            p.textContent = ingredientArray[i][1];
            console.log(ingredientArray[i][1]);
            ingredientDiv.appendChild(p);
          }
        }
        carouselInner.appendChild(carouselDiv);
      }
    });
}

// function populateCocktailCard() {

// }
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
