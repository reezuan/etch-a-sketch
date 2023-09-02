function createBoard(length) {
    const board = document.querySelector(".board");
    const hornButton = document.querySelector("#horn-mode-button");
    
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
            event.target.style.backgroundColor = "#333333";
            if (hornButton.classList.contains("active-setting")) {
                playHorn();
            }
        });

        // When the cursor hovers over a box, check if the left mouse button is being depressed.
        // If it is being depressed, change the colour accordingly.
        // More info here: https://stackoverflow.com/questions/15098584/check-if-mouse-button-is-down-while-hovering

        pixel.addEventListener("mouseover", (event) => {
            if (event.buttons == 1) {
                event.target.style.backgroundColor = "#333333";
                if (hornButton.classList.contains("active-setting")) {
                    playHorn();
                }
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

function playHorn() {
    const hornSound = new Audio("assets/airhorn.mp3");
    hornSound.play();
}

function initialiseSettings() {
    const colourButton = document.querySelector("#colour-mode-button");
    const rainbowButton = document.querySelector("#rainbow-mode-button");
    const hornButton = document.querySelector("#horn-mode-button");
    const eraseButton = document.querySelector("#erase-button");
    const boardSizeInput = document.querySelector("#board-size-slider");
    const boardSizeLabel = document.querySelector(".board-size-label");

    // Initialise colour mode button.
    // Initialise rainbow mode button.
    
    // Initialise horn mode button.
    hornButton.addEventListener("click", () => {
        // Toggle a class for active buttons.
        hornButton.classList.toggle("active-setting");
    });
    
    // Initialise button to erase board.
    eraseButton.addEventListener("click", () => {
        clearBoard();
        createBoard(+boardSizeInput.getAttribute("value"));
    });
    
    // Initialise size selection slider.
    // https://stackoverflow.com/questions/63410174/running-a-function-while-changing-range-slider
    boardSizeInput.addEventListener("input", (event) => {
        boardSizeLabel.textContent = `${event.target.value} x ${event.target.value}`;
        clearBoard();
        createBoard(event.target.value);
    });

    boardSizeInput.addEventListener("change", (event) => {
        boardSizeInput.setAttribute("value", +event.target.value);
    });
}

initialiseSettings();
createBoard(16);