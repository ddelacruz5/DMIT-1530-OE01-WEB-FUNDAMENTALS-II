/*
   ==========================================================
   TOGGLE NAVIGATION JAVASCRIPT
   ==========================================================

   This is the same JavaScript pattern used in Exercises 17
   and 18.

   Both demos use the class .toggle-btn, so one script can
   provide the same behaviour to each button.
   ==========================================================
*/


/*
   Search the HTML document for EVERY element with the
   class .toggle-btn.

   querySelectorAll() returns a collection of matching
   elements.

   We store that collection in the variable toggleButtons.
*/
const toggleButtons = document.querySelectorAll(".toggle-btn");


/*
   forEach() loops through the collection one button at a time.

   This allows every toggle button on the page to receive
   the same click behaviour.
*/
toggleButtons.forEach((toggleButton) => {


    /*
       addEventListener() tells the current button to listen
       for a user click.

       When that click happens, the function runs.
    */
    toggleButton.addEventListener("click", function (event) {


        /*
           stopPropagation() prevents this click event from
           bubbling upward to parent elements.
        */
        event.stopPropagation();


        /*
           "this" refers to the specific button that was clicked.

           nextElementSibling selects the HTML element that comes
           immediately AFTER that button and shares the same parent.

           In both navigation demos, that next sibling is the menu
           we want to open and close.

           classList.toggle("expanded") works like a switch:

           If .expanded is missing:
               add it

           If .expanded is already there:
               remove it

           The CSS for .collapsed and .expanded controls whether
           the menu is visible.
        */
        this.nextElementSibling.classList.toggle("expanded");

    });
});
