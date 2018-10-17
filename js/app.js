$('.spoiler').on('click', 'button', function(event){
    console.log(event.target);
//Show the spoiler text 
$(this).prev().show();
//Hide the "Reveal Spoiler" button
$(this).hide();
});

//Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>'); // To create an element in jQuery all you need to do is pass a string containing valid HTML to the jQuery method
//Append to webpage, the append method adds an element as the last item within a parent element
$('.spoiler').append($button);

//hide the spoiler
$('.spoiler span').hide(); //we select the spoiler by using descendant selectors







