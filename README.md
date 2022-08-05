# Dropdown Character Maker

## Learning Objectives

- Use a for/of loop to run a function against every item in an array (i.e., console.log , alert ).
- In response to a user event, add a new item to a state array and display the new state to the user (i.e., add a new todo).
- Use the .value property to get the value of a 'grabbed' HTML form input tag
- Use .createElement() and .append() to display a new HTML tag (with .textContent ) to a grabbed DOM element on click.
- Use .createElement() and .append() to add a list of new DOM  elements to a grabbed DOM element on click
- Create a select element to create a dropdown.
- Use `+` and `${}` to concatenate strings.
- Identify what variables are in a given scope/closure

## Live Example:

https://alchemycodelab.github.io/web-01-character-designer/

## Getting Started

User [this repository](https://github.com/alchemycodelab/half-baked-web-01-character-designer) as a template for this deliverable.

| Events . . .                                                                                                                                          |     |
| :---------------------------------------------------------------------------------------------------------------------------------------------------- | --: |
| Select from at least three dropdowns with at least three options each                                                                                 |   2 |
| On choosing an option from the dropdown and see the change reflected in the UI with a new image                                                       |   1 |
| On change, See all catchphrases rendered to the DOM                                                                                                   |   2 |
| When submitting a catchphrase, add it to an array of catchphrases, clear the current DOM's list of catchphrases, and list all catchphrases in the DOM |   1 |
| See displayed how many times each dropdown has been changed in the current session                                                                    |   1 |

| Functions                                                                                                                                                                                |     |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --: |
| IMPURE: `displayStats() : mutates the DOM to display a string describing the counts.` |   1 |
| IMPURE: `displayCatchphrases() : clears out the old list from the DOM, loops through catchphrases, renders and appends to the list element`                                                                                                                                                          |   2 |

<!-- Plan for Half Baked - features to work on/ fix -->
<!-- 1. when selecting an item from the dropdown in the head category, a head picture displays on the side -->
<!-- button element + event listener to change the images that are displayed -->
<!-- 2. repeat for the middle and bottom by writing a function for all three -->

<!-- 3. display how many times each feature was changed -->
<!-- each button click should also change the sting with the values of each changing in the correct increments -->

<!-- 4. when submitting a catchphrase, display all catchphrases that were entered -->
<!-- the new thing we learned today on creating new p tags in JS to add items into an existing array then clearing the existing DOM element to display the new one with the new items added. -->