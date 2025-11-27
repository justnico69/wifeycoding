const mainGif = document.getElementById('main-gif');
const initialGif = 'assets/dudu_ask2.gif'; // FIXED to match HTML
let gifInterval; // Variable to hold the loop timer

// --- Crying/Sad Loop Data (NO) ---
const cryingGifs = [
    'assets/dudu_cry1.gif',
    'assets/dudu_cry2.gif',
    'assets/dudu_cry3.gif'
];
let cryIndex = 0;

// Function to start the Dudu Crying/Sad Loop
function startNoLoop() {
    // 1. Clear any existing loop
    stopLoop();

    // Immediately show the first crying gif so the user gets instant feedback
    mainGif.src = cryingGifs[cryIndex];
    cryIndex = (cryIndex + 1) % cryingGifs.length;

    // 2. Set the loop to change the GIF every 2000ms (2 seconds)
    gifInterval = setInterval(() => {
        mainGif.src = cryingGifs[cryIndex];
        // Cycle through the 3 crying gifs
        cryIndex = (cryIndex + 1) % cryingGifs.length;
    }, 2000);
}

// --- Shocked/Happy Loop Data (YES) ---
const yesGifs = [
    'assets/dudu_hehe.gif',
    'assets/dudu_excited.gif' 
];
let yesIndex = 0;

// Function to start the Dudu Shocked/Happy Loop
function startYesLoop() {
    // 1. Clear any existing loop
    stopLoop();

    // Immediately show the first yes gif for instant feedback
    mainGif.src = yesGifs[yesIndex];
    yesIndex = (yesIndex + 1) % yesGifs.length;
    
    // 2. Set the loop to change the GIF every 2000ms (2 seconds)
    gifInterval = setInterval(() => {
        mainGif.src = yesGifs[yesIndex];
        // Cycle through the 2 yes gifs
        yesIndex = (yesIndex + 1) % yesGifs.length;
    }, 2000); 
}

// Function to stop the loop and reset the GIF
function stopLoop() {
    clearInterval(gifInterval); // Stop the timer
    gifInterval = null; // ensure we don't keep a stale id
    mainGif.src = initialGif; // Reset to the initial "asking" GIF
    cryIndex = 0;
    yesIndex = 0;
}
//Function for NO click redirecting gf to angry page
function handleNoClick() {
    stopLoop();
    window.location.href = 'angry.html';
}


// Function executed when YES is finally clicked
function handleYesClick() {
    stopLoop(); // Stop any loop just in case
    // Redirect to the final success page
    window.location.href = 'success.html'; 
}
