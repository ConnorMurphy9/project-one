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

// When user clicks cocktail button, search for a cocktail
cocktailBtnEl.addEventListener("click", cocktailNameSearch);
function cocktailNameSearch(event) {
  event.preventDefault();
var carouselExampleControls = document.getElementById("carouselExampleControls");

// Targets div id "drink1" of carousel on left of page
cocktailInfo1 = document.getElementById("drink1");
  
// cocktailData variable is is user's cocktail input
var cocktailData = cocktailChoiceEl.value;
  //     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailChoice}`)
  //         .then(response => response.json())
  //         .then(function(data) {console.log(data);
  //  var cocktailInfo1 = document.getElementById("drink1");
  //             cocktailInfo1.innerHTML = `<h2 id="drinkName1">${data.drinks[0].strDrink}</h2><p
  //             id="ingredients">Ingredients:${data.drinks[0]}`
  console.log(cocktailData);
  
  // search cocktail api database for drink based on what user typed, return data as object
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailData}`)
    .then((response) => response.json())
    .then(function (data) {
      // if no drink data, stop
      if (data.drinks.length === 0) {
        console.warn("no drink data");
        return;
      }
      // for length of drink list returned, 
      for (let x = 0; x < data.drinks.length; x++) {
       
        // create variable called "obj" which is all (x) of the drinks returned in data object
        var obj = data.drinks[x];
        console.log(data);
        
        // console.log("herrrrrererere", Object.entries(obj));
        console.log("obj", obj);
       
        // create div element onto HTML called carouselDiv
        const carouselDiv = document.createElement("div")
        // console.log(carouselDiv);
        
        // set attribute of carouselDiv element to: "class", "carousel-item"
        carouselDiv.setAttribute("class", "carousel-item")
       
        // will always set first item of carousel to active as long as for loop above starts x at 0
        if (x === 0) carouselDiv.setAttribute("class", "carousel-item active")
        
        const cocktailRecipeName0 = document.createElement("");

        // set const "img" as actual img element being created in HTML
        const img = document.createElement("img");
        // img.crossOrigin = "Anonymous";
        
        // set image attributes in HTML of said const img src to whichever part in the data contains a real image or some kind of data
        img.setAttribute("src", obj.strImageSource || obj.strDrinkThumb);
        // console.log(obj.strImageSource);
        
        // append the img to the carouselDiv element
        carouselDiv.appendChild(img);
       
        // set const "ingredientDiv" as new div in HTML 
        const ingredientDiv = document.createElement("div");
        
        // add the new ingredientDiv to the carouselDiv
        carouselDiv.appendChild(ingredientDiv);
        

        // declare new variable for ingredients list inside drinks data
        var ingredientArray = Object.entries(obj).slice(17, 32);
        console.log("ingredientArray", ingredientArray);
        
        // set "drink1" element of carousel's contents as a string 
        cocktailInfo1.innerHTML = "";
       
        // declares temporary variable/index "i" inside ingredient array
        for (let i in ingredientArray) {
          // (var i=0; i<ingredientArray.length; i++);
         
          // using 1 for index here because the ingredientArray index of 0 in each is literally just strIngredient1, strIngredient2...etc. This gives us actual ingredients instead of nonsense  
            if (ingredientArray[i][1] != null) {
              
              // as long as there is an ingredient to list in data, create a "p" element
              let p = document.createElement("p");
              // set the text content of this new p element to the ingredient
              p.textContent = ingredientArray[i][1];
              console.log(ingredientArray[i][0]);
              console.log(ingredientArray[i][1]);
              // add this new p element to the ingredientDiv element
              ingredientDiv.appendChild(p);

          }
        }
        
        carouselInner.appendChild(carouselDiv);
        // carouselExampleControls.textContent = `${data.drinks[x].strDrink}`;
      // var cocktailNameArray = data.drinks[0].strDrink;
      // for (let j in cocktail)
      //   // for (var i = )
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

