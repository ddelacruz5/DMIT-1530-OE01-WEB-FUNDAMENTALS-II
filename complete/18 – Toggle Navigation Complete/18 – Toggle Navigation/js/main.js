// Select all HTML elements that have the class "toggle-btn".
// querySelectorAll() returns a NodeList (a collection of matching elements).
// This allows us to apply the same functionality to multiple buttons.
const toggleButtons = document.querySelectorAll(".toggle-btn");

// Loop through each button in our NodeList using forEach().
// This ensures that every toggle button gets its own click event listener.
toggleButtons.forEach((toggleButton) => {

    // Listen for a "click" event on the current button.
    // When the user clicks the button, the function inside will execute.
    toggleButton.addEventListener("click", function (event) {

        // Prevent the click event from bubbling up to parent elements.
        // Normally, clicking a child element can also trigger click
        // event listeners attached to its parent elements.
        // stopPropagation() prevents that from happening.
        event.stopPropagation();

        // "this" refers to the button that was clicked.
        // nextElementSibling selects the HTML element immediately
        // following this button, provided they share the same parent.
        //
        // classList.toggle() adds the "expanded" class if it is missing,
        // or removes it if the class is already present.
        //
        // This allows us to alternate between two states:
        // - First click: Adds "expanded" (opens the dropdown).
        // - Second click: Removes "expanded" (closes the dropdown).
        //
        // The CSS rules associated with ".expanded" determine how
        // the dropdown appears or disappears on the page.
        this.nextElementSibling.classList.toggle("expanded");

    });
});