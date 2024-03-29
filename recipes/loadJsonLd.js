$(document).ready(function(){
    var jsonld = JSON.parse(document.querySelector('script[type="application/ld+json"]').innerText);
    $('#name').text(jsonld.name);
    $('#author').text(jsonld.author);
    if (jsonld.image === '') {
        $("#imageUrl").hide();
    } else {
        $("#imageUrl").attr("src",jsonld.image);
    }
    $('#serves').text(jsonld.recipeYield);
    $('#preptime').text(jsonld.prepTime);
    $('#cooktime').text(jsonld.cookTime);

    var ingredients_data='';
    $.each(jsonld.recipeIngredient,function(key,value){
        if ( typeof(value) === 'string' ) {
            ingredients_data +='<li itemprop="ingredients">'+value+'</li>';
        } else {
            ingredients_data +='<li itemprop="ingredients">'+value.spec + ' ' +value.itemId+'</li>';
        }
    });
    $('#ingredients').append(ingredients_data)

    var howto_data='';
    if ( typeof(jsonld.recipeInstructions) === 'string' ) {
        howto_data +='<li>'+jsonld.recipeInstructions+'</li>';
    } else {
        $.each(jsonld.recipeInstructions,function(key,value){
            howto_data +='<li>'+value+'</li>';
        });
    }
    $('#howto').append(howto_data)
});   