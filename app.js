// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

let headChanges = 0;
let middleChanges = 0;
let bottomChanges = 0;

let characterCatchphrase = [];

// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    const headSelection = headDropdown.value;
    // increment the head change count state
    headChanges++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url(./assets/${headSelection}-head.png)`;
    // update the stats to show the new count (call displayStats() to do this work)
    resultsDisplay();
});



middleDropdown.addEventListener('change', () => {
    const middleSelection = middleDropdown.value;
    middleChanges++;
    middleEl.style.backgroundImage = `url(./assets/${middleSelection}-middle.png)`;
    resultsDisplay();
});


bottomDropdown.addEventListener('change', () => {
    const bottomSelection = bottomDropdown.value;
    bottomChanges++;
    bottomEl.style.backgroundImage = `url(./assets/${bottomSelection}-pants.png)`;
    resultsDisplay();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const catchphraseText = catchphraseInput.value; 

    // push the new catchphrase to the catchphrase array in state
    characterCatchphrase.push(catchphraseText);
    console.log(characterCatchphrase);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();
});


function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state
    for (let catchphrase of characterCatchphrase) { //declaration of the loop
        const catchphraseTag = document.createElement('p'); //events that will happen to every index added to the array
        catchphrasesEl.textContent = catchphrase;
        catchphrasesEl.append(catchphraseTag);
        console.log(catchphrase);

    }
    // and for each catchphrase
    
    // create an HTML element with the catchphrase as its text content
    // const catchphrase = document.createElement('p');
    // catchphrasesEl.textContent = catchphraseInput.value;
    // catchphrasesEl.append(catchphrase);
    // and append that HTML element to the cleared-out DOM
}

// function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
// }

function resultsDisplay() {
    reportEl.textContent = `You have changed the head ${headChanges} time(s), the middle ${middleChanges} time(s), and the bottom ${bottomChanges} time(s)`
};

