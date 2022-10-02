var spoonacularAPIKey = "eeb9c6fafcaf4013839d8c8e6162013a";

var cocktailAPIKey = "d9d1de419cmsh3efe3d08141101ap1d1cdejsnd21e801ce08b"

var dinnerBtn = document.getElementById("dinnerBtn");
var cocktailChoiceEl = "";
var cocktailBtnEl = document.getElementById("cocktailBtn");
var rightCard = document.getElementById("right");
var leftCard = document.getElementById("left");
var cocktailsResultsEl = document.querySelector(".cocktails-results")
var dishForm = document.querySelector(".dish-form");
var dishInput = document.querySelector(".dish-input");
var dishesResult = document.querySelector(".dishes-results");
var savedRecipes;



dishForm.addEventListener("submit", (e) => {
    
    e.preventDefault();
    let dishValue = dishInput.value;
    dishValue = dishValue.split(" ").join(",+");

    const options = {method: 'GET'};
    // https://api.spoonacular.com/recipes/complexSearch?apiKey=eeb9c6fafcaf4013839d8c8e6162013a&query=gluten-free
    // https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2
    let fetchDish = fetch('https://api.spoonacular.com/recipes/findByIngredients?apiKey='+spoonacularAPIKey+'&ingredients='+dishValue+'&number=5', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        return response.forEach((res) => {
            dishesResult.innerHTML += `
            <div class="card-info">
                <h3>${res?.title}</h3>
                <div class="card-body">
                    <div class="card-img-wrapper">
                        <img src="${res?.image}" alt="${res?.title}">
                    </div>
                    <div class="card-ingredients">
                        <h4>Ingredients used were:</h4>
                        <ul>
                            <li>Name: ${res?.usedIngredients[0]?.name ? res?.usedIngredients[0]?.name : "Ingredient name not avaialable"}</li>
                            <li>Amount: ${res?.usedIngredients[0]?.amount ? res?.usedIngredients[0]?.amount : "Amount not available"}</li>
                            <li>Original: ${res?.usedIngredients[0]?.original ? res?.usedIngredients[0]?.original : "Original name not available"}</li>
                            <li>Unit: ${res?.usedIngredients[0]?.unit ? res?.usedIngredients[0]?.unit : "Unit not available"}</li>
                        </ul>
                    <div>
                </div>
            </div>
        `;

        })
        
    } )
    .catch(err => console.error(err));
   
      
})








cocktailBtnEl.addEventListener("click", cocktailSearch);
function cocktailSearch (event) {
  event.preventDefault();
  cocktailChoiceEl = document.getElementById("cocktailInput").value; 
    //   console.log(cocktailChoiceEl);
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cocktail?name=' + cocktailChoiceEl,
    headers: { 'X-Api-Key': 'KxE5FMqtJE+cddRT34B6Vw==Qj3At9bRl1rlRw1Z'},
    contentType: 'application/json',
    success: function(data) {
        console.log(data);
        for (let i = 0; i < data.length; i++)
            {storeRecipes();

            cocktailsResultsEl.innerHTML += 
                `<div class="card-info">
                     <h2>${data[i].name}</h2>      
                        <div class="card-body">
                            <div class="card-ingredients">
                                <h4>Ingredients:</h4>
                                    <p>
                                        ${data[i].ingredients}
                                    </p>
                                <h4>Instructions:</h4>
                                    <p>
                                        ${data[i].instructions}
                                    </p>
                        </div>
                </div>`
                function storeRecipes() {
                    // for (let i = 0; i < data.length; i++)
                         savedRecipes = {
                            name : data[i].name,
                            ingredients : data[i].ingredients,
                            instructions : data[i].instructions,
                    };
                
                    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
                    console.log(savedRecipes);
                };
                
                // function to display user's saved recipes to the page
                function displaySavedRecipes() {
                    var displaySavedRecipes = JSON.parse(localStorage.getItem("savedRecipes"))
                // Check if data is returned, if not exit out of the function.
                    if (displaySavedRecipes !== null) {
                        document.getElementById("displaySavedRecipes").innerHTML = "Your saved recipes: " + displaySavedRecipes.name + displaySavedRecipes.ingredients + displaySavedRecipes.instructions;
                    }
                
                };
                // console.log();
// storeRecipes();
displaySavedRecipes();
// console.log(data.name); 
console.log(data[i].name);
    }},

    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
})

};

// function to store user's recipe choice data to local storage
// function storeRecipes() {
//     savedRecipes = {
//         name : data[i].name,
//         ingredients : data[i].ingredients,
//         instructions : data[i].instructions,
//     };

//     localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
// };

// // function to display user's saved recipes to the page
// function displaySavedRecipes() {
//     var displaySavedRecipes = JSON.parse(localStorage.getItem("savedRecipes"))
// // Check if data is returned, if not exit out of the function.
//     if (displaySavedRecipes !== null) {
//         document.getElementById("displaySavedRecipes").innerHTML = "Your saved recipes:" + displaySavedRecipes;
//     }

// };
