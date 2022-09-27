var spoonacularAPIKey = af28c41e911742cab678a8ddcd93acaa;
var cocktailAPIkey = KxE5FMqtJE+cddRT34B6Vw==Qj3At9bRl1rlRw1Z;
var dinnerChoice = getelementbyid("dinner-choice");
var dinnerBtn = getelementbyid("");
var cocktailChoice = getelementbyid("cocktail-choice");
var cocktailBtn = getelementbyid("");

var cocktailSearch = ''
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cocktail?name=' + cocktailSearch,
    headers: { 'X-Api-Key': 'KxE5FMqtJE+cddRT34B6Vw==Qj3At9bRl1rlRw1Z'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

