// Step 1: When the user clicks on the h1
$('h1').click('slow', function() {
  $('img').fadeToggle();
})// a) Fade toggle the img (which is hidden with css by default)


// Step 2: When the user focuses on the input (the focus event)
$('input').focus(function(event) {
  $(this).addClass('active');/* Act on the event */
});// a) Add the active class to the input (which has been styled in the style.css)


// Step 3: When the user clicks or tabs away from the input (the blur event)
$('input').mouseout(function(event) {
  $(this).removeClass('active')/* Act on the event */
});	// a) Remove the active class from the input


$('#menu').hide();// Step 4: Hide the item with the id #menu


// Step 5: When the element with the id #dropdownButton is clicked,
$('#dropdownButton').click('slow', function(event) {
  $('#menu').slideToggle();/* Act on the event */
});// a) slide toggle #menu (look up the slideToggle method if you need a refresher)





