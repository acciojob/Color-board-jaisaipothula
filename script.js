//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");

    // Create 800 squares dynamically
    const numSquares = 800;
    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);

        // Add event listener for hover effect
        square.addEventListener("mouseenter", function() {
            // Change background color on hover
            this.style.backgroundColor = "#66bb6a"; // Example hover color

            // Reset background color after 1 second
            setTimeout(() => {
                this.style.backgroundColor = "#ccc"; // Example default color
            }, 1000); // 1000 milliseconds = 1 second
        });
    }
});
