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
                event.target.style.backgroundColor = "#000000";
            }
        });
    });
}

function clearBoard() {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        row.remove();
    });
}

function initialiseSettings() {
    // https://stackoverflow.com/questions/63410174/running-a-function-while-changing-range-slider
    
    const boardSizeInput = document.querySelector("#board-size-slider");
    const boardSizeLabel = document.querySelector(".board-size-label");

    boardSizeInput.addEventListener("input", (event) => {
        boardSizeLabel.textContent = `${event.target.value} x ${event.target.value}`;
        clearBoard();
        createBoard(event.target.value);
    });
}

initialiseSettings();
createBoard(16);