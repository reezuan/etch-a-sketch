function createBoard(length) {
    const board = document.querySelector(".board");
    
    for (let row = 0; row < length; row++) {
        const row = document.createElement("div");
        row.classList.add("row");

        // For each row, create the required number of pixels.
        for (let column = 0; column < length; column++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            row.appendChild(pixel);
        }

        // Append the entire row as a child to the .board class.
        board.appendChild(row);
    }
    
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mousedown", (event) => {
            event.target.style.backgroundColor = "#000000";
        });

        // When the cursor hovers over a box, check if the left mouse button is being depressed.
        // If it is being depressed, change the colour accordingly.
        // More info here: https://stackoverflow.com/questions/15098584/check-if-mouse-button-is-down-while-hovering

        pixel.addEventListener("mouseover", (event) => {
            if (event.buttons == 1) {
                console.log(event.target);
                event.target.style.backgroundColor = "#000000";
            }
        });
    });

    // Container will stay same size - the width/height of each div can be calculated (width of container / no. of boxes).
    // Add an event listener to each ^ div that listens for mousedown, and changes colour accordingly.

    // Each div should have a solid black border with 0 margins.
}

// Functions to create:
// - One to set a new colour upon changing of settings.

createBoard(16);